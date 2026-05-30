import {test, expect} from '@playwright/test'

const testUsers = ['standard_user', 'locked_in_user', 'problem_user']

test('loop through each user and log in', async ({page}) =>  {

    for(const user of testUsers) {
        console.log('test user ', user)

        await page.goto('https://www.saucedemo.com/')
        console.log('Page title', await page.title()); 
    }
})