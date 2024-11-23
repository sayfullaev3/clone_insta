export function createPost() {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post-container');

    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');

    const profilePic = document.createElement('img');
    profilePic.src = '#';
    profilePic.alt = 'Profile Picture';

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const nickname = document.createElement('div');
    nickname.classList.add('nickname');
    nickname.textContent = 'nickname';

    const location = document.createElement('div');
    location.classList.add('location');
    location.textContent = 'City, Country';

    userInfo.append(nickname);
    userInfo.append(location);

    postHeader.append(profilePic);
    postHeader.append(userInfo);

    const postImage = document.createElement('div');
    postImage.classList.add('post-image');

    const postActions = document.createElement('div');
    postActions.classList.add('post-actions');

    const icons = document.createElement('div');
    icons.classList.add('icons');

    ['like', 'coment', 'share'].forEach((icon) => {
        const img = document.createElement('img');
        img.src = `./public/icons/${icon}.png`;
        img.alt = '';
        icons.append(img);
    });

    const saveIcon = document.createElement('img');
    saveIcon.classList.add('save');
    saveIcon.src = './public/icons/save.png';
    saveIcon.alt = '';

    postActions.append(icons);
    postActions.append(saveIcon);

    const postLikes = document.createElement('div');
    postLikes.classList.add('post-likes');
    postLikes.textContent = '8,888 likes';

    const postCaption = document.createElement('div');
    postCaption.classList.add('post-caption');

    const captionNickname = document.createElement('span');
    captionNickname.classList.add('nickname');
    captionNickname.textContent = 'nickname';

    const captionText = document.createTextNode(
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    );

    postCaption.append(captionNickname);
    postCaption.append(captionText);

    const comments = document.createElement('div');
    comments.classList.add('comments');
    comments.textContent = 'View all 33 comments';

    const commentInput = document.createElement('div');
    commentInput.classList.add('comment-input');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add a comment...';

    const button = document.createElement('button');
    button.textContent = 'Post';

    commentInput.append(input);
    commentInput.append(button);

    postContainer.append(postHeader);
    postContainer.append(postImage);
    postContainer.append(postActions);
    postContainer.append(postLikes);
    postContainer.append(postCaption);
    postContainer.append(comments);
    postContainer.append(commentInput);


    
    return postContainer;
}

