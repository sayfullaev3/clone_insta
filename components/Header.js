export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('img');
    logo.src = './public/icons/Logo.png';
    logo.alt = '';
    header.append(logo);

    const searchInput = document.createElement('input');
    searchInput.classList.add('search');
    searchInput.type = 'search';
    searchInput.placeholder = '🔍 Search';
    header.append(searchInput);

    const nav = document.createElement('nav');
    nav.classList.add('navigation');

    const links = [
        { className: 'home', src: './public/icons/home.png' },
        { className: 'sms', src: './public/icons/sms.png' },
        { className: 'dark_mode', src: '' },
        { className: 'like', src: './public/icons/like.png' },
    ];

    links.forEach(({ className, src }) => {
        const link = document.createElement('a');
        link.classList.add(className);
        link.href = '';``

        const icon = document.createElement('img');
        icon.src = src;
        icon.alt = '';
        link.append(icon);

        nav.append(link);
    });

    const profileLink = document.createElement('a');
    profileLink.classList.add('profile');
    profileLink.href = '';

    const profileButton = document.createElement('button');
    profileButton.classList.add('profile_ava');

    const profileAvatar = document.createElement('div');
    profileAvatar.classList.add('avatar_profile');
    profileButton.append(profileAvatar);

    profileLink.append(profileButton);
    nav.append(profileLink);

    header.append(nav);

    return header;
}
