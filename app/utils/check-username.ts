// false -> username taken / true -> username available
export type UsernameAvailability = {
    github: boolean;
    // More to come...
}

export async function checkAvailability(username: string): Promise<UsernameAvailability> {
    // Run all external queries in parallel
    const [github] = await Promise.all([
        checkGithubAvailability(username)
    ])

    const res: UsernameAvailability = {
        github: github
    }

    return res;
}

async function checkGithubAvailability(username: string) {
    const res = await fetch("https://api.github.com/users/" + username, {
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": "Bearer " + process.env.GITHUB_TOKEN,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })

    if (res.status == 200) {
        // username is taken
        return false;
    } else {
        // username is available
        return true;
    }
}
