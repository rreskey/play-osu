const { StatusCodes } = require('http-status-codes')

async function withAuthorization(req, res, next) {
    const currentTS = new Date().valueOf / 1000
    console.log(`middlware sessionID ${req.sessionID}`)
    console.log(req.session)
    console.log(req.session.token)
    if (!req.session?.token) {
        req.session.status = StatusCodes.FORBIDDEN
        // req.session.body = null
        
        console.log('MIDDLEWARE WORKS --- 1')
        return
    }

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
    }

    if (req.session.refresh_at < currentTS) {
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
            
            req.session.body = 'Authorization is done!'
            
            return next()
        } catch (e) {
            req.session.status = StatusCodes.FORBIDDEN
            console.log(e)
        }
    }
    return next()
}
module.exports = withAuthorization