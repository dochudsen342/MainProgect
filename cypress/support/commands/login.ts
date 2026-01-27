export const login = (username: string, password: string) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password
        },
    }).then(({ body }) => {
        console.log('body', body)
        window.localStorage.setItem('user', JSON.stringify(body))

    })
}