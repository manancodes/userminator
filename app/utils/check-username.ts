export type UsernameAvailability = {
    github: boolean;
    // More to come...
}

export async function checkAvailability(username: string): Promise<UsernameAvailability> {
    let res: UsernameAvailability = {
        github: await checkGithubAvailability(username)
    }

    return res;
}

async function checkGithubAvailability(username: string) {
    return true;
}
