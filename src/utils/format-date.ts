export const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(date))

export const formatDateTime = (date: string | Date) =>
  new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date))
