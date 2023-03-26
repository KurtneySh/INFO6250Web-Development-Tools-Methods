import { cats } from './data'

(function() {

    const appEl = document.querySelector('#app');
    let cartHtml = document.querySelector('.cart');

    //set the original cart hidden
    let cartHidden = false;

    const getCartHtml = () => {
        if (getCartAmount() === 'View Cart (0)') {
            cartHtml = `
                <div class="empty-cart">Nothing in the cart</div>
            `;
        } else if (!cartHidden) {
            const checkout = document.querySelector('.checkout');
            checkout.innerHTML = ``;
            cartHtml = `
                <div class="icon"><i class="gg-shopping-cart"></i></div>
            `
        } else {
            cartHtml = cats.filter(cat => cat.amount > 0).map( (cat) => {
                const checkout = document.querySelector('.checkout');
                checkout.innerHTML = `<button class="checkout-button">Checkout</button>`;

                //set index to each cat list
                return `
                    <li class="cart-cat cat${cats.indexOf(cat)}">
                        <img src="${cat.img}"/><span>${cat.name}</span>
                        <span class="cat${cats.indexOf(cat)}-number">amount: ${cat.amount}</span>
                        <span class="cat${cats.indexOf(cat)}-number-total">total price: $${(cat.amount * cat.price).toFixed(2)}</span>
                        <div class="operation">
                            <span class="add cart-number" data-index="${cats.indexOf(cat)}"> + </span>
                            <span class="reduce" data-index="${cats.indexOf(cat)}"> - </span>
                            <button class="delete" data-index="${cats.indexOf(cat)}">Delete</button>
                        </div>
                    </li>
                `;
            }).join('');
        }

        return cartHtml;
    }

    const render = () => {
        const catsHtml = cats.map( (cat, index) => {
            return `
                <li class="cat">
                    <img src="${cat.img}"/>
                    <div>${cat.name}: $${cat.price}/each</div>
                    <div><button data-index="${index}" class="add-cart" type="button"> Add to cart </button></div>
                </li>
            `;
        }).join('');

        appEl.innerHTML = `
            <ul class="cat-list">
                ${catsHtml}
            </ul>
            <button class="cats-number show">${getCartAmount()}</button>
            <div class="cart">${getCartHtml()}</div>
            <div class="checkout">${getCheckoutButton()}</div>
        `;
    }

    const getCheckoutButton = () => {
        if (cartHidden && getCartAmount() !== 'View Cart (0)') {
            return `<button class="checkout-button">Checkout</button>`
        } else {
            return ``;
        }
    }

    //count how many cats in total when click 'add to cart' button
    const getCartAmount = () => {
        let amountSum = 0;
        for (const cat of cats) {
            amountSum += cat.amount;
        }

        return `View Cart (${amountSum})`;
    }

    appEl.addEventListener('click', (e) => {

        //click 'add to cart' button
        if (e.target.classList.contains('add-cart')) {
            const index = e.target.dataset.index;
            cats[index].amount += 1;
            const catsNumber = document.querySelector('.cats-number');
            const emptyCart = document.querySelector('.empty-cart');
            if (emptyCart) {
                emptyCart.innerText = '';
            }
            catsNumber.innerText = getCartAmount();
            cartHtml = getCartHtml();
            return;
        }

        //click '+' button
        if (e.target.classList.contains('add')) {
            const index = e.target.dataset.index;
            cats[index].amount += 1;
            const catNumber = document.querySelector(`.cat${index}-number`);
            const catTotalPrice = document.querySelector(`.cat${index}-number-total`);
            catTotalPrice.innerText = `total price: $${(cats[index].amount * cats[index].price).toFixed(2)}`;
            catNumber.innerText = `amount: ${cats[index].amount}`;
            return;
        }

        //click 'view cart/hide cart' button
        if (e.target.classList.contains('show')) {
            const cartHtml = document.querySelector('.cart');
            const cartNumber = document.querySelector('.cats-number');
            const addCartButton = document.querySelectorAll(".add-cart");

            if (cartHidden && getCartAmount() !== 'View Cart(0)') {
                cartHidden = false;
                cartNumber.innerText = getCartAmount()
                addCartButton.forEach(button => button.disabled = false);
            } else {
                cartNumber.innerText = 'Hide cart';
                cartHidden = true;
                addCartButton.forEach(button => button.disabled = true);
            }
            cartHtml.innerHTML = getCartHtml();
            return;
        }

        //click '-' button
        if (e.target.classList.contains('reduce')) {
            const index = e.target.dataset.index;
            const currCat = document.querySelector(`.cat${index}`)
            if (cats[index].amount > 1) {
                cats[index].amount -= 1;
                const catNumber = document.querySelector(`.cat${index}-number`);
                const catTotalPrice = document.querySelector(`.cat${index}-number-total`);
                catTotalPrice.innerText = `total price: $${(cats[index].amount * cats[index].price).toFixed(2)}`;
                catNumber.innerText = `amount: ${cats[index].amount}`;
            } else {
                cats[index].amount -= 1;
                currCat.remove();
            }

            const checkout = document.querySelector('.checkout');
            checkout.innerHTML = getCheckoutButton();

        }

        //click 'delete' button
        if (e.target.classList.contains('delete')) {
            const index = e.target.dataset.index;
            const currCat = document.querySelector(`.cat${index}`);
            cats[index].amount = 0;
            currCat.remove();
            const checkout = document.querySelector('.checkout');
            checkout.innerHTML = getCheckoutButton();
        }

        //click checkout button
        if (e.target.classList.contains('checkout-button')) {
            for (const cat of cats) {
                cat.amount = 0;
            }
            cartHidden = false;

            render();
        }
        
    });

    render();
})();