import { test, expect } from '@playwright/test'

test.describe('Pruebas de login OrangeHRM', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/')
    })

    test('login correcto', async ({ page }) => {

        await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
        await page.getByRole('button', { name: 'Login' }).click()

        await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()

    })

    test('login incorrecto', async ({ page }) => {

        await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
        await page.getByRole('textbox', { name: 'Password' }).fill('claveIncorrecta')
        await page.getByRole('button', { name: 'Login' }).click()

        await expect(page.getByText('Invalid credentials')).toBeVisible()

    })

})