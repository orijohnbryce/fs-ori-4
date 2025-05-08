

async function callAi(msg) {
    const token = "<token>";
    const url = "https://api.groq.com/openai/v1/chat/completions";

    try {
        const opt = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [{
                    role: 'system',
                    content: "Answer everything in only capital letters",
                },{
                    role: 'user',
                    content: msg,
                }]
            })

        }
        const res = await fetch(url, opt);
        // console.log(res);
        
        const resJ = await res.json();
        console.log(resJ.choices[0].message);
        

    } catch (error) {
        console.log(error);        
        // console.log("error");        
    }
}

callAi("My name is Ori, say hi to me");