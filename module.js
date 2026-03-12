export const stageItemTitle = document.querySelectorAll(".stage-item-title");
export const mainTitle = document.querySelectorAll('.main-title')
export function openContent(item) {
    item.forEach((i) => {
        i.addEventListener('click', () => {
            if (i.nextElementSibling.style.display === '') {
                i.nextElementSibling.style.display = 'block'
            }
            else {
                i.nextElementSibling.style.display = ''
            }
        });
    })
}