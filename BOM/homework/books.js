let books = [];
books[0] = {
	id: '1',
	img: 'https://www.moscowbooks.ru/image/book/606/orig/i606290.jpg',
	title:'Война и мир',
	author:'Лев Толстой',
	plot:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatibus saepe\
		temporibus eveniet beatae laboriosam enim obcaecati adipisci dolor eius ullam, magni quibusdam\
		illum nulla molestiae tempora doloremque omnis nam!'
}
books[1] = {
	id: '2',
	img: 'https://www.moscowbooks.ru/image/book/482/w154/i482282.jpg',
	title:'Алхимик',
	author:'Пауло Коельйо',
	plot:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatibus saepe\
			temporibus eveniet beatae laboriosam enim obcaecati adipisci dolor eius ullam, magni quibusdam\
			illum nulla molestiae tempora doloremque omnis nam!'
}
books[2] = {
	id: '3',
	img: 'https://www.moscowbooks.ru/image/book/695/w154/i695081.jpg',
	title:'Звезды сияют с небес',
	author:'Сидни Шелдон',
	plot:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatibus saepe\
		temporibus eveniet beatae laboriosam enim obcaecati adipisci dolor eius ullam, magni quibusdam\
		illum nulla molestiae tempora doloremque omnis nam!'
}
if(!localStorage.hasOwnProperty('books')){
	localStorage.setItem('books', JSON.stringify(books));
}