function BankAccount(initialBalance = 0) {
    const btnTopUpDeposit = document.querySelector('.js--enhance-balance');
    const btnWithdraw = document.querySelector('.js--reduce-balance');
    const btnGetBalance = document.querySelector('.js--get-balance');

    const modal = document.querySelector('.modal');
    const close = modal.querySelector('.js--close');
    const balanceOut = modal.querySelector('.js--balance');
    const operationText = modal.querySelector('.modal__text-action');

    let balance = initialBalance;

    this.handleInput = function (event, callback) {
        const input = event.target.previousElementSibling;
        if (input && !isNaN(Number(input.value))) {
            const amount = Number(input.value);
            if (amount > 0) {
                callback(amount);
            } else {
                alert('Сумма должна быть положительной');
            }
        }
    }
    
    this.initEventListeners = function () {
        btnTopUpDeposit.addEventListener('click', event => {
            this.handleInput(event, this.deposit.bind(this));
        });
        btnWithdraw.addEventListener('click', event => {
            this.handleInput(event, this.withdraw.bind(this));
        });
        btnGetBalance.addEventListener('click', () => {
            this.showModal(null, balance, 'balance');
            console.log(this.getBalance());
        });
        close.addEventListener('click', () => {
            modal.classList.remove('active');
        })
    }

    this.deposit = function (amount) {
        if (amount > 0) {
            balance += amount;
            this.showModal(amount, balance, 'deposit');
        } else {
            alert('Депозит не может быть отрицательным');
        }
    }
    
    this.withdraw = function (amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            this.showModal(amount, balance, 'withdraw');
        } else {
            alert('Недостаточно денег на счету');
        }
    }

    this.getBalance = function () {
        return balance;
    }

    this.showModal = function (operationAmount, balanceAmount, typeOfOperation) {
        modal.classList.add('active');

        switch (typeOfOperation) {
            case 'deposit' : {
                operationText.textContent = `Вы положили на счет ${operationAmount}`;
                break;
            }
            case 'withdraw' : {
                operationText.textContent = `Вы сняли со счета ${operationAmount}`;
                break;
            }
            case 'balance' : {
                operationText.textContent = '';
                break
            }
        }
        balanceOut.textContent = balanceAmount;
    }

    this.initEventListeners();
}

const bank = new BankAccount(2000);

