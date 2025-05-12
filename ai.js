let CONVERSATION = ""

async function callAi(msg) {
    const token = "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";
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
                    content: "Do not elaborate on responses, be short!",
                }, {
                    role: 'user',
                    content: msg,
                }]
            })

        }
        const res = await fetch(url, opt);
        // console.log(res);

        const resJ = await res.json();
        return resJ.choices[0].message.content;
    } catch (error) {
        console.log(error);
        alert("Error. retry later")
    }
}

async function handleSend() {
    document.querySelector("#send-btn").disabled = true;

    const inputEl = document.getElementById("input");
    const convEl = document.querySelector("#conversation");

    const newMsg = inputEl.value;
    if (newMsg.length === 0) {
        return;
    }
    inputEl.value = "";    
    CONVERSATION = CONVERSATION + `User: ${newMsg}<br/>`;
    
    convEl.innerHTML = CONVERSATION;

    try {
        const aiRes = await callAi(CONVERSATION);
        CONVERSATION += `AI: ${aiRes}<br/>`
    } catch (error) {
        alert("Sorry, error. retry later..")
    }

    convEl.innerHTML = CONVERSATION;
}

function handleInputChange(e) {
    if (e.target.value) {
        if (e.inputType === "insertLineBreak") { 
            handleSend();
            return;
        }
        document.querySelector("#send-btn").disabled = false;
    } else {
        document.querySelector("#send-btn").disabled = true;
    }
}