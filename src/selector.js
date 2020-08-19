const selector = (users,text) => {
    return users.filter( u => {
        const textMatch = u.name.toString().toLowerCase().includes(text.toString().toLowerCase());
        return textMatch;
    })
}

export default selector;