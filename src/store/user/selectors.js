export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user;

export const selectUserSpace = (state) => state.user.space;

export const selectUserStories = (state) => state.user.space?.stories;
