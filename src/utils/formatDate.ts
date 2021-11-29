export const formatDate = (date: Date) => date
	.toLocaleString('ru')
	.slice(0, 10);