function validateForm() {
	let sumInput = document.querySelector('.SumInput').value
	let mailInput = document.querySelector('.MailInput').value
	let paInput = document.querySelector('.PAInput').value
	let isValid = true

	document.getElementById('sumErr').innerText = ''
	document.getElementById('mailErr').innerText = ''
	document.getElementById('paErr').innerText = ''
	document.getElementById('CheckedErr').innerText = ''

	if (sumInput === '' || isNaN(sumInput)) {
		document.getElementById('sumErr').innerText =
			'Это поле обязательно для заполнения'
		isValid = false
	}

	if (mailInput === '') {
		document.getElementById('mailErr').innerText =
			'Это поле обязательно для заполнения'
		isValid = false
	} else {
		// Проверка на корректный email
		let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
		if (!emailPattern.test(mailInput)) {
			document.getElementById('mailErr').innerText = 'Введите корректный email'
			isValid = false
		}
	}

	if (paInput.replace(/\s/g, '').length < 20) {
		document.getElementById('paErr').innerHTML =
			'Введите счет в формате: 123 456 789 123 456 78900'
		isValid = false
	}

	let acceptTerms = document.getElementById('acceptTerms').checked
	if (!acceptTerms) {
		document.getElementById('CheckedErr').innerText =
			'Пожалуйста, примите условия использования.'
		isValid = false
	}

	if (isValid) {
		window.location.href = '../pages/Payment2.html' // Замените 'Payment2.html' на URL следующей страницы
	}
}

// Ограничение на ввод только чисел
document.querySelector('.SumInput').addEventListener('input', function (e) {
	this.value = this.value.replace(/[^0-9]/g, '')
	// Очистка ошибки при вводе корректных данных
	if (this.value !== '') {
		document.getElementById('sumErr').innerText = ''
	}
})

document.querySelector('.PAInput').addEventListener('input', function (e) {
	let value = this.value.replace(/\s/g, '').replace(/[^0-9]/g, '')
	let formattedValue = ''

	for (let i = 0; i < value.length; i++) {
		if (i === 3 || i === 6 || i === 9 || i === 12 || i === 15) {
			formattedValue += ' '
		}
		if (i === 21) {
			formattedValue += ' '
		}
		formattedValue += value[i]
	}

	// Ограничение длины ввода до 20 чисел (24 символа с учетом пробелов)
	if (value.length > 20) {
		value = value.substring(0, 20)
	}

	this.value = formattedValue.substring(0, 25) // Учитываем 24 символа и один пробел

	// Очистка ошибки при вводе корректных данных
	if (value.length >= 20) {
		document.getElementById('paErr').innerText = ''
	}
})

document.querySelector('.MailInput').addEventListener('input', function (e) {
	// Очистка ошибки при вводе корректных данных
	if (this.value !== '') {
		document.getElementById('mailErr').innerText = ''
	}
})

// Проверка на минимальную длину при потере фокуса
document.querySelector('.PAInput').addEventListener('blur', function (e) {
	let value = this.value.replace(/\s/g, '')
	if (value.length < 20) {
		document.getElementById('paErr').innerHTML =
			'Введите счет в формате:123 456 789 123 456 78900'
	}
})

// Проверка обязательных полей при потере фокуса
document.querySelector('.SumInput').addEventListener('blur', function (e) {
	if (this.value === '' || isNaN(this.value)) {
		document.getElementById('sumErr').innerText =
			'Это поле обязательно для заполнения'
	}
})

document.querySelector('.MailInput').addEventListener('blur', function (e) {
	if (this.value === '') {
		document.getElementById('mailErr').innerText =
			'Это поле обязательно для заполнения'
	} else {
		// Проверка на корректный email
		let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
		if (!emailPattern.test(this.value)) {
			document.getElementById('mailErr').innerText = 'Введите корректный email'
		}
	}
})

// Проверка условия использования при потере фокуса
document.querySelector('#acceptTerms').addEventListener('blur', function (e) {
	if (!this.checked) {
		document.getElementById('CheckedErr').innerText =
			'Пожалуйста, примите условия использования.'
	} else {
		document.getElementById('CheckedErr').innerText = ''
	}
})
