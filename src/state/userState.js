export default async function userStateQuery() {
    try {
        const meState = await fetch('http://localhost:6001/api/me')
        const jsonRes = await meState.json()
        console.log(jsonRes)
        if (meState.status === 200) {
            return jsonRes
        }
    } catch (e) {
        console.log(e)
    }
    return null
}