import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Genel Ayarlar',
  type: 'document',
  description: 'Çalışma saatleri istisnaları ve üst bilgi duyuruları gibi site geneli ayarlar',
  fields: [
    defineField({
      name: 'announcement',
      title: 'Üst Bilgi Duyurusu',
      type: 'string',
      description: 'Sitenin en üstünde gösterilecek kısa duyuru (boş bırakılırsa gösterilmez)',
      validation: (rule) => rule.max(140),
    }),
    defineField({
      name: 'announcementActive',
      title: 'Duyuru Aktif',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'openingHoursExceptions',
      title: 'Çalışma Saati İstisnaları',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'exception',
          title: 'İstisna',
          fields: [
            defineField({
              name: 'date',
              title: 'Tarih',
              type: 'date',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'note',
              title: 'Not',
              type: 'string',
              description: 'Örn. Ramazan Bayramı — Kapalıyız',
              validation: (rule) => rule.required().max(80),
            }),
            defineField({
              name: 'closed',
              title: 'Tam Gün Kapalı',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'openTime',
              title: 'Açılış Saati',
              type: 'string',
              description: 'Sadece kapalı değilse kullanılır (örn. 12:00)',
              hidden: ({parent}) => parent?.closed === true,
            }),
            defineField({
              name: 'closeTime',
              title: 'Kapanış Saati',
              type: 'string',
              description: 'Sadece kapalı değilse kullanılır (örn. 22:00)',
              hidden: ({parent}) => parent?.closed === true,
            }),
          ],
          preview: {
            select: {
              title: 'note',
              date: 'date',
              closed: 'closed',
            },
            prepare: ({title, date, closed}) => ({
              title,
              subtitle: `${date ? new Date(date).toLocaleDateString('tr-TR') : ''}${closed ? ' — Kapalı' : ' — Değişken saat'}`,
            }),
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'announcement',
      active: 'announcementActive',
    },
    prepare: ({title, active}) => ({
      title: 'Site Ayarları',
      subtitle: title && active ? `Duyuru: ${title}` : 'Aktif duyuru yok',
    }),
  },
})
