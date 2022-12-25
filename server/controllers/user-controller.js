const { StatusCodes } = require('http-status-codes')

class UserController {
    async login(req, res) {

    if (!req.session?.token) {
        req.session.status = StatusCodes.CONFLICT
        req.session.body = null
        console.log('already authorized')
        return
    }

    if (!req.query.code) {
        req.session.status = StatusCodes.FORBIDDEN
        return
    }

    const currentTS = Math.round(new Date().getTime() / 1000)

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
        "code": req.query.code,
        "grant_type": "authorization_code",
        "redirect_uri": "http://localhost:6001/api/login"
    }

    try {
        let response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        })
        response = await response.json()

        req.session.token = response.access_token
        req.session.refresh_token = response.refresh_token
        req.session.refresh_at = Number(currentTS) + Number(response.expires_in)

        res.cookie('token', response.access_token)
        res.redirect('http://localhost:5173/play-osu/')
    } catch (err) {
        res.status(500).json({msg: `Internal Server Error.`});
    }
}
    async me(req, res) {
        if (!req.session.token) {
            res.status = StatusCodes.FORBIDDEN
            return
        }
        if (req.session.token) console.log('WE HAVE TOKEN')
        try {
            let response = await fetch("https://osu.ppy.sh/api/v2/me/osu", {
            headers: {
                Authorization: `Bearer ${req.session.token}`
            }
        })
            req.session.body = await response.json()
            
            res.send(req.session.body)
            return req.session.body
        } catch (e) {
            console.log(e)
        }
        return req.session.body
    }
}

module.exports = new UserController()