let inputID = document.getElementById("inputID").value = 1200403423
const idChecker = () => {
    if (inputID == "") {
        inputID = document.getElementById("inputID").value = 1200403423
    }
    else {
        inputID = document.getElementById("inputID").value
    }
}
const E404 = document.getElementById("E404")
function input(e) {
    fetch(`https://www.roblox.com/users/${e.value}/profile`)
        .then((e) => e.text())
        .then((e) => {
            const username = document.getElementById("username");
            const AvatarImg = document.getElementById("AvatarImg");
            const bioDiv = document.getElementById("bioDiv");
            const Avatar = document.getElementById("Avatar");
            idChecker()


            // userName
            const usernameRegex = /"profileusername":"(.*?)"/;
            const matchUsername = e.match(usernameRegex);
            if (matchUsername && matchUsername[1]) {
                username.style.display = "block"
                const profileUsername = matchUsername[1];
                username.innerHTML = `username: <a target="_blank" href="https://www.roblox.com/users/${inputID}/profile">${profileUsername}</a>`;

                const title = document.getElementById("title")
                title.innerHTML = profileUsername
            }

            // profileAvatar
            const regex = /<meta property="og:image" content="(.*?)"/;
            const match = e.match(regex);
            if (match && match[1]) {
                Avatar.style.display = "block"

                const imageUrl = match[1];
                AvatarImg.src = imageUrl;
                const favicon = document.getElementById("favicon").href = imageUrl
            }

            // ბიოგრაფია
            const descriptionRegex = /<meta property="og:description" content="(.*?)" \/>/;
            const matchDescription = e.match(descriptionRegex);
            if (matchDescription && matchDescription[1]) {
                const descriptionContent = matchDescription[1];
                bioDiv.innerHTML = `<h1>About:</h1><textarea placeholder="404 - Not Found" rows="16" cols="90" class="bio">${descriptionContent.slice(145)}</textarea>`;
            }
            E404.style.display = "none"

        }).catch(E404.style.display = "block")

}