import {defineField, defineType} from 'sanity'

export const menuCategory = defineType({
  name: 'menuCategory',
  title: 'Menü Kategorisi',
  type: 'document',
  description: 'Menünün bölümleri (örn. Başlangıçlar, Ana Yemekler, İçecekler)',
  fields: [
    defineField({
      name: 'title',
      title: 'Kategori Adı',
      type: 'string',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 2,
      description: 'Kategorinin menüde görünecek kısa alt metni (isteğe bağlı)',
    }),
    defineField({
      name: 'order',
      title: 'Sıra',
      type: 'number',
      description: 'Kategorinin menüdeki görünüm sırası (küçük değer önce görünür)',
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Sıraya göre',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
