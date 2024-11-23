export function createRekUser() {
    const rekUser = document.createElement('div');
    rekUser.classList.add('rek_user');

    const myProfile = document.createElement('div');
    myProfile.classList.add('my');

    const myButton = document.createElement('button');
    myButton.classList.add('my_profile');

    const myAvatar = document.createElement('div');
    myAvatar.classList.add('avatar_my');
    myButton.append(myAvatar);

    const myInfo = document.createElement('div');
    myInfo.classList.add('my_info');

    const myName = document.createElement('p');
    myName.textContent = 'P.Diddy';
    const myHandle = document.createElement('h5');
    myHandle.textContent = 'diddy';

    myInfo.append(myName);
    myInfo.append(myHandle);

    const switchLink = document.createElement('a');
    switchLink.classList.add('switch');
    switchLink.href = '#';
    switchLink.textContent = 'Switch';

    myProfile.append(myButton);
    myProfile.append(myInfo);
    myProfile.append(switchLink);

    rekUser.append(myProfile);

    const rek = document.createElement('div');
    rek.classList.add('rek');

    const allSuggestions = document.createElement('div');
    allSuggestions.classList.add('all');

    const suggestionsTitle = document.createElement('h3');
    suggestionsTitle.textContent = 'Suggestions For You';
    const seeAll = document.createElement('h4');
    seeAll.textContent = 'See All';

    allSuggestions.append(suggestionsTitle);
    allSuggestions.append(seeAll);

    rek.append(allSuggestions);

    for (let i = 0; i < 5; i++) {
        const rekUser = document.createElement('div');
        rekUser.classList.add('rekmd_users');

        const suggestionButton = document.createElement('button');
        suggestionButton.classList.add('suggestions');

        const suggestionAvatar = document.createElement('div');
        suggestionAvatar.classList.add('avatar_suggestions');
        suggestionButton.append(suggestionAvatar);

        const userInfo = document.createElement('div');
        userInfo.classList.add('rekmd_users_info');

        const userName = document.createElement('h5');
        userName.textContent = 'nickname';
        const userSuggestion = document.createElement('p');
        userSuggestion.textContent = 'Suggestions For You';

        userInfo.append(userName);
        userInfo.append(userSuggestion);

        const followLink = document.createElement('a');
        followLink.classList.add('follow');
        followLink.href = '#';
        followLink.textContent = 'Follow';

        rekUser.append(suggestionButton);
        rekUser.append(userInfo);
        rekUser.append(followLink);

        rek.append(rekUser);
    }

    rekUser.append(rek);

    return rekUser;
}
































