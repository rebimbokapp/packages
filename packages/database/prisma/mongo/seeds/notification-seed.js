const { randomUUID } = require('node:crypto');

const { PrismaClient } = require('../generated');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'mongodb://root:docker@localhost:27017/rebimboka?authSource=admin&directConnection=true',
    },
  },
});

async function main() {
  await prisma.$connect();

  const userOne = await prisma.user.create({
    data: {
      id: randomUUID(),
      full_name: 'User One',
    },
  });

  const notification = await prisma.notification.create({
    data: {
      id: randomUUID(),
      category: 'MESSAGE',
      content: ';-;',
    },
    include: {
      users_read: true,
      users_unread: true,
    },
  });

  console.log('CREATE USER ONE', {
    userOne,
  });

  console.log('CREATE NOTIFICATION', {
    notification,
  });

  const userOneOnNotificationUnread =
    await prisma.userOnNotificationUnread.create({
      data: {
        id: randomUUID(),
        notification_id: notification.id,
        user_id: userOne.id,
      },
    });

  console.log('ADD USER TO NOTIFICATION UNREAD', {
    userOneOnNotificationUnread,
  });

  const getNotificationsWithUsersUnread = await prisma.notification.findFirst({
    where: {
      id: notification.id,
    },
    include: {
      users_read: true,
      users_unread: true,
    },
  });

  console.log('GET NOTIFICATION WITH USERS UNREAD.', {
    getNotificationsWithUsersUnread,
  });

  const allUnreadNotificationsByUserOne = await prisma.notification.findMany({
    where: {
      users_unread: {
        some: {
          user_id: userOne.id,
        },
      },
    },
  });

  console.log('GET ALL UNREAD NOTIFICATIONS BY USER ONE', {
    allUnreadNotificationsByUserOne,
  });

  const userOneOnNotificationRead = await prisma.userOnNotificationRead.create({
    data: {
      id: randomUUID(),
      notification_id: notification.id,
      user_id: userOne.id,
    },
  });

  console.log('ADD USER TO NOTIFICATION READ', {
    userOneOnNotificationRead,
  });

  await prisma.userOnNotificationUnread.delete({
    where: {
      id: userOneOnNotificationUnread.id,
    },
  });

  const notificationWithUsersRead = await prisma.notification.findFirst({
    where: {
      id: notification.id,
    },
    include: {
      users_read: true,
      users_unread: true,
    },
  });

  console.log('GET NOTIFICATION WITH USERS READ.', {
    notificationWithUsersRead,
  });

  const allReadNotificationsByUserOne = await prisma.notification.findMany({
    where: {
      users_read: {
        some: {
          user_id: userOne.id,
        },
      },
    },
  });

  console.log('GET ALL READ NOTIFICATIONS BY USER ONE', {
    allReadNotificationsByUserOne,
  });

  await prisma.$disconnect();
}

main();
