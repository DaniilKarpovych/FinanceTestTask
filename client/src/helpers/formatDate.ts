// Хелпер функция для форматирования даты
export const formatDate = (date: string | undefined) => {
    if (!date) {
        return null;
    }
    const formattedDate = new Date(date).toLocaleDateString('ru-RU',{hour:"numeric",minute:"numeric"});

    return formattedDate;
};
