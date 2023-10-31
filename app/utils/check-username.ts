const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// false -> username taken / true -> username available
export type UsernameAvailability = {
    github: boolean;
    x: boolean;
    // More to come...
}

export async function checkAvailability(username: string): Promise<UsernameAvailability> {
    // Run all external queries in parallel
    const [github, x] = await Promise.all([
        checkGithubAvailability(username),
        checkXAvailability(username)
    ])

    const res: UsernameAvailability = {
        github: github,
        x: x
    }

    return res;
}

/**
 * Checks username availability on Github
 * 
 * site: https://github.com
 * @param username username to check for
 * @returns true if available, false otherwise
 */
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

/**
 * Checks username availability on X
 * 
 * site: https://twitter.com
 * @param username username to check for
 * @returns true if available, false otherwise
 */
async function checkXAvailability(username: string) {
    const res = await fetch("https://twitter.com/" + username)

    if (!res.ok) {
        return false;
    }

    const dom = new JSDOM(res.body);
    if (dom.document.title == "Profile / X") {
        return true;
    } else {
        return false;
    }
}