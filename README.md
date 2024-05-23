# Hackathon Template

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzRra2ozY2FvcTQ1cjUwMHViYnh3cnIxaHRtNTBjeDBibXc2b3JhcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MdA16VIoXKKxNE8Stk/giphy.gif)

This is the "hackathon-template" project for automation in playwright.

## Scripts

Here are some scripts that you can run in this project:

- `test`: Run tests with Playwright. Use `npm run test`.
- `test:codegen`: Generate code with Playwright. Use `npm run test:codegen`.
- `test:headed`: Run headed tests with Playwright. Use `npm run test:headed`.
- `test:ui`: Run UI tests with Playwright. Use `npm run test:ui`.
- `format`: Format the code with Prettier. Use `npm run format`. Makes your code prettier.

## Steps how to start

1. Fork this. You know it. You can do it.
1. Clone it.
1. Use it!
1. `npm install` to install all dependencies. 
1. Edit line 27 (`baseUrl`) in `playwright.config.ts` to your url
  * then you can use `await page.goto("/login")` for example 
  * or like that in your page
    ```ts 
      async visit() {
        await this.page.goto("/login");
      }
    ```
1. Check structure of this project. 
1. You can use page object pattern, if you want.
1. You can use `codegen` as well

Good luck!

## If you have troubles to run tests
1. `npx playwright install --with-deps chromium`

