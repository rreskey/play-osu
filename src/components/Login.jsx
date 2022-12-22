import React from 'react'
import '../App.css'

export default function Login() {

    function getToken() {
        fetch("https://osu.ppy.sh/oauth/authorize?response_type=code&client_id=19432&redirect_uri=http://127.0.0.1:5173/play-osu/", {
            method: "GET",
        })
            .then(response => console.log(response))
    }
    
    function logwebsite() {
        const url = new URL(
            "https://osu.ppy.sh/oauth/token"
        );
        
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
        
        let body = {
            "client_id": 19432,
            "client_secret": 'bKgZmLGM4B4c2CRNN965Ikx6ohjpjskr9uAnsrRk',
            "code": "def50200ce0eac61203879bbe21e22be9de96d60b15aa52720e7345a5dd321a7b2af25c313a00aa7b7784a3a322a5b2910fbb52b6255f2a7299b412add2f4220cade764058b81694043b7cd6d6868b4c5431436d1b433bed42159527c4d5465b0d33d63321133fc4b0285c4d80013c8e42e295c74ec70f5b4e9511523337f5ed6194be1e9d5cfdf0f8ec0af1743e30a10ce72783796ffc6a3df02a4b9d4f3cfedf515c12173ff5bd7496be2019c5e4bc4394a065eb222c5732b76a6a93fdb1b0c699b6c1440f1acea6bb4e2110df9c9f3773113c9b559bf22e1f6b9637dfb300e3dd11920925da4c9a3373fecbc3d38c62a7100999138c21c0ed5e2c873796ae17edb8eac06bec63732b553d3322551ccc4f0010bb5ecfe05c899ced530963755811c951320e89876b986f527fb6003f79719e07c77937950f36c5542e27c0e5c81add6f403eabe47b541749d02a63ea737bbf62327fb291a508beb5a6038ce9c2eeac2094ee07a324cf348097c9b5c78793f7fe",
            "grant_type": "authorization_code",
            "redirect_uri": "http://127.0.0.1:5173/play-osu/"
        }
        
        fetch("https://osu.ppy.sh/oauth/token", {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then(response => console.log(response.json()));
    }
  
    return (
    <div style={{color: 'wheat', fontSize: '2rem'}}>
        <button onClick={() => logwebsite()}>LOGIN</button>
        <button onClick={() => getToken()}>get token</button>
    </div>
  )
}
