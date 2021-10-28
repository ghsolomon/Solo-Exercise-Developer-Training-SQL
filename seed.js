const { db, Book, Author } = require('./db');

const books = [
  {
    title: 'Generation Um...',
    edition: 'audio',
    isbn13: '857897702-5',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    language: 'Zulu',
    publicationDate: '6/5/2021',
  },
  {
    title: 'Dr. Jekyll and Mr. Hyde',
    edition: 'digital',
    isbn13: '775358648-3',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    language: 'Dhivehi',
    publicationDate: '2/1/2021',
  },
  {
    title: 'Cry_Wolf (a.k.a. Cry Wolf)',
    edition: 'audio',
    isbn13: '683817877-X',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    language: 'Gujarati',
    publicationDate: '10/27/2020',
  },
  {
    title: "Act of Seeing with One's Own Eyes, The ",
    edition: 'hardcover',
    isbn13: '962559362-4',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    language: 'Dari',
    publicationDate: '1/5/2021',
  },
  {
    title: 'Double Hour, The (La doppia ora)',
    edition: 'paperback',
    isbn13: '270198549-8',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    language: 'Kyrgyz',
    publicationDate: '11/25/2020',
  },
  {
    title: 'Duplex',
    edition: 'paperback',
    isbn13: '451329396-9',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    language: 'Papiamento',
    publicationDate: '9/5/2021',
  },
  {
    title: 'Rio Sex Comedy',
    edition: 'hardcover',
    isbn13: '914534079-X',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    language: 'French',
    publicationDate: '8/10/2021',
  },
  {
    title: 'Broken Flowers',
    edition: 'audio',
    isbn13: '696061106-7',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    language: 'Malagasy',
    publicationDate: '7/18/2021',
  },
  {
    title: 'Mujhse Dosti Karoge!',
    edition: 'hardcover',
    isbn13: '110005498-7',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    language: 'Albanian',
    publicationDate: '4/13/2021',
  },
  {
    title: 'Sleep with Me',
    edition: 'paperback',
    isbn13: '997160333-0',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    language: 'English',
    publicationDate: '12/4/2020',
  },
  {
    title:
      'Lost Honor of Katharina Blum, The (Verlorene Ehre der Katharina Blum oder: Wie Gewalt entstehen und wohin sie führen kann, Die)',
    edition: 'digital',
    isbn13: '793131163-9',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    language: 'New Zealand Sign Language',
    publicationDate: '9/22/2021',
  },
  {
    title: 'Ro.Go.Pa.G.',
    edition: 'hardcover',
    isbn13: '178950404-X',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    language: 'Japanese',
    publicationDate: '11/7/2020',
  },
  {
    title:
      "Nibelungen: Kriemhild's Revenge, Die (Die Nibelungen: Kriemhilds Rache)",
    edition: 'hardcover',
    isbn13: '862175133-X',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    language: 'Dari',
    publicationDate: '6/25/2021',
  },
  {
    title: "Chemical Brothers: Don't Think, The",
    edition: 'hardcover',
    isbn13: '371870744-6',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    language: 'Bislama',
    publicationDate: '5/14/2021',
  },
  {
    title: 'The New Babylon',
    edition: 'audio',
    isbn13: '139215918-0',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    language: 'Catalan',
    publicationDate: '8/29/2021',
  },
  {
    title: 'David Cross: Let America Laugh',
    edition: 'audio',
    isbn13: '035502359-8',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    language: 'Bulgarian',
    publicationDate: '9/2/2021',
  },
  {
    title: 'Fond Kiss, A (Ae Fond Kiss...)',
    edition: 'paperback',
    isbn13: '119838724-6',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    language: 'Malayalam',
    publicationDate: '10/15/2021',
  },
  {
    title: 'Diplomatic Immunity (2009– )',
    edition: 'hardcover',
    isbn13: '787032441-8',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    language: 'Telugu',
    publicationDate: '7/14/2021',
  },
  {
    title: 'Loving',
    edition: 'audio',
    isbn13: '484034795-6',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    language: 'Filipino',
    publicationDate: '6/3/2021',
  },
  {
    title: 'Balkan Spy (Balkanski spijun)',
    edition: 'hardcover',
    isbn13: '049218572-7',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    language: 'Assamese',
    publicationDate: '9/22/2021',
  },
];

const authors = [
  {
    name: 'Norby Butterley',
  },
  {
    name: 'Ermengarde Duddin',
  },
  {
    name: 'Larina Preshous',
  },
  {
    name: 'Darb Kidde',
  },
  {
    name: 'Floris Hastwell',
  },
  {
    name: 'Greer Piletic',
  },
  {
    name: 'Claude Lowrey',
  },
  {
    name: 'Dasi Aldam',
  },
  {
    name: 'Philippa Eisold',
  },
  {
    name: 'Jordain Tonge',
  },
];

const seedDB = async () => {
  await db.sync({ force: true });
  const seededBooks = await Book.bulkCreate(books);
  const seededAuthors = await Author.bulkCreate(authors);

  for (let book of seededBooks) {
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
      await book.addAuthor(
        seededAuthors[Math.floor(Math.random() * seededAuthors.length)]
      );
    }
  }
  console.log('Successfully seeded the db!');
  db.close();
};

seedDB();
