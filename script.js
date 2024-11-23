import { createHeader } from './components/Header.js';
import { createUserStories } from './components/UserStories.js';
import { createRekUser } from './components/RekUser.js';
import { createPost } from './components/Post.js';

function createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');

    const header = createHeader();
    const userStories = createUserStories();
    const rekUser = createRekUser();
    const post = createPost(); 

    const box = document.createElement('div');
    box.classList.add('box');

    box.append(userStories);
    box.append(rekUser);

    container.append(header);
    container.append(box);
    container.append(post);

    return container;
}

document.body.append(createContainer());
