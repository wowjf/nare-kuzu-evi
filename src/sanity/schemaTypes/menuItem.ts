import {defineField, defineType} from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menü Ürünü',
  type: 'document',
  description: 'Menüdeki tek bir ürün (örn. Kuzu Pirzola, Ayran)',
  fields: [
    defineField({
      name: 'name',
      title: 'Ürün Adı',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'description',
      title: 'İçerik / Açıklama',
      type: 'text',
      rows: 3,
      description: 'Ürünün içeriği veya kısa açıklaması (isteğe bağlı)',
    }),
    defineField({
      name: 'price',
      title: 'Fiyat',
      type: 'number',
      description: 'TL cinsinden fiyat (örn. 250)',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [{type: 'menuCategory'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Etiketler',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Vegan', value: 'vegan'},
              {title: 'Vejetaryen', value: 'vegetarian'},
              {title: 'Acı', value: 'spicy'},
              {title: 'Şefin Tavsiyesi', value: 'chefs-choice'},
              {title: 'Glutensiz', value: 'gluten-free'},
              {title: 'Yeni', value: 'new'},
            ],
          },
        },
      ],
      options: {
        layout: 'grid',
      },
      description: 'Ürüne menüde görünecek etiketler',
    }),
    defineField({
      name: 'available',
      title: 'Satışta',
      type: 'boolean',
      initialValue: true,
      description: 'Kapatılırsa ürün sitede gösterilmez',
    }),
    defineField({
      name: 'order',
      title: 'Sıra',
      type: 'number',
      description: 'Kategori içindeki görünüm sırası (küçük değer önce görünür)',
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: 'İsme göre (A-Z)',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Kategori + sıraya göre',
      name: 'categoryOrder',
      by: [
        {field: 'category.title', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      categoryTitle: 'category.title',
      price: 'price',
      available: 'available',
    },
    prepare: ({title, categoryTitle, price, available}) => ({
      title,
      subtitle: `${categoryTitle ?? 'Kategorisiz'} — ${price ?? 0} TL${available ? '' : ' (satışta değil)'}`,
    }),
  },
})
