export default async function userStateQuery() {
    try {
        const meState = await fetch(`${window.location.origin}/api/me`, {
            headers: {
                credentials: 'include'
            }
        })
        const jsonRes = await meState.json()
        if (meState.status === 200) {
            return jsonRes
        }
    } catch (e) {
        console.log(e)
    }
    return null
}