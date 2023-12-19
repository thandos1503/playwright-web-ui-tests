import {expect, type Locator } from '@playwright/test';

export async function clickElement(element: Locator) {
    await element.click();
}

export async function elementIsVisible(element: Locator) {
    await expect(element).toBeVisible();
}

export async function elementCheck(element: Locator) {
    await element.check();
}


export async function setText(element: Locator, text: string) {
    await element.fill(text);
}

export async function elementDropdownSelection(element: Locator, text: string) {
    await element.selectOption(text);
}


