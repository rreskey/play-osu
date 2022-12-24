class UserController {
    async login(req, res) {

    const cur_url = req.protocol + '://' + req.get('host') + req.originalUrl
    const cur_url_arr = cur_url.split('=')

    const url = new URL(
    "https://osu.ppy.sh/oauth/token"
    );
      
    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    let body = {
        "client_id": process.env.CLIENT_ID,
        "client_secret": process.env.CLIENT_SECRET,
        "code": cur_url_arr[1],
        "grant_type": "authorization_code",
        "redirect_uri": "http://localhost:6001/api/login"
    }
  
    try {
        let response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        })
        response = await response.json();
        res.cookie('token', response.access_token)
        let response_login = await fetch("https://osu.ppy.sh/api/v2/me/osu", {
            headers: {
                Authorization: `Bearer ${response.access_token}`
            }
        })
        response_login = await response_login.json()
        let res_id = response_login.id

        console.log(response_login.id, response_login.username)

        res.redirect(301, 'http://localhost:5173/play-osu/')
        return console.log(res_id)
        // res.status(200).json(response);
    } catch (err) {
        console.log(`error2 - ${err}`);
        res.status(500).json({msg: `Internal Server Error.`});
    }
}
    async auth(req, res) {
        res.json({token: req.cookies['token']})
        // res.json({hi: 'hihi'})
    }
}

module.exports = new UserController()