export function createUserStories() {
    const blockOne = document.createElement('div');
    blockOne.classList.add('block_one');

    for (let i = 0; i < 7; i++) {
        const userStory = document.createElement('div');
        userStory.classList.add('user_stories');

        const button = document.createElement('button');
        button.classList.add('user_one');

        const avatar = document.createElement('div');
        avatar.classList.add('avatar_users');
        button.append(avatar);

        const nickname = document.createElement('p');
        nickname.textContent = 'nickname';

        userStory.append(button);
        userStory.append(nickname);
        blockOne.append(userStory);
    }

    return blockOne;
}
