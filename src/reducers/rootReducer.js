const initState = {
	posts: [
		{ id: 1, title: 'goood', body: 'just some text just some text just some text just some text just some text just some text just some text.'},
		{ id: 2, title: 'bad', body: 'the second body hear the second body hear the second body hear the second body hear the second body hear.'},
		{ id: 3, title: 'ugly', body: 'Globalization is not a good idea Globalization is not a good idea Globalization is not a good idea.'},
	]
}

const rootReducer = (state = initState, action) => {
	if (action.type == 'DELETE_POST'){
		let new_posts = state.posts.filter(post => {
			return post.id !== action.id
		});

		return {
			...state,
			posts: new_posts
		}
	}

	return state;
}

export default rootReducer;