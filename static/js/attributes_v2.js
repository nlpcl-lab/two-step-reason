const Annotation = {
  attributes: {
    sentence: {
      attribute1: {
        order: 1,
        title: '1. Persuasiveness Score',
        attribute_key: 'Persuasiveness_Score',
        options: [
          'A very strong, clear argument.',
          'A strong, pretty clear argument.',
          'A decent, fairly clear argument.',
          'A poor, understandable argument.',
          'It is unclear what the author is trying to argue.',
          'The author does not appear to make any argument.'
        ]
      },
      attribute2: {
        order: 2,
        title: '2. Evidence Score',
        attribute_key: 'Evidence_Score',
        options: [
          'A very strong, very persuasive argument body.',
          'A strong, persuasive argument body.',
          'A decent, fairly persuasive argument body.',
          'A poor, possibly persuasive argument body.',
          'A totally unpersuasive argument body.',
          'There is no argument body for the given component.'
        ]
      }
    },
    event: {
      attribute1: {
        order: 1,
        title: '1. Knowledge Awareness',
        attribute_key: 'Knowledge_Awareness',
        options: ['I already know.', 'I did not know.']
      },
      attribute2: {
        order: 2,
        title: '2. Credibility',
        attribute_key: 'Credibility',
        options: [
          'false',
          'feel like false',
          'hard to judge',
          'feel like true',
          'true',
          'none'
        ]
      },
      attribute3: {
        order: 3,
        title: '3. Verifiability',
        attribute_key: 'Verifiability',
        options: [
          'verify it with my knowledge',
          'verify it by short time googling',
          'verify it by long time googling',
          'hard to verify it',
          'no way to verify it',
          'none'
        ]
      },
      attribute4: {
        order: 4,
        title: '4. Conditionality',
        attribute_key: 'Conditionality',
        options: ['sufficient condition', 'necessary condition', 'none']
      },
      attribute5: {
        order: 5,
        title: '5. Polarity',
        attribute_key: 'Polarity',
        options: ['negative', 'positive']
      },
      attribute6: {
        order: 6,
        title: '6. Tense',
        attribute_key: 'Tense',
        options: ['past', 'present', 'future', 'unspecified']
      },
      attribute7: {
        order: 7,
        title: '7. Genericity',
        attribute_key: 'Genericity',
        options: ['specific', 'generic']
      },
      attribute8: {
        order: 8,
        title: '8. Source Type',
        attribute_key: 'Source_Type',
        options: [
          'author',
          'involved',
          'named third party',
          'unnamed third party'
        ]
      },
      attribute9: {
        order: 9,
        title: '9. Subjectivity',
        attribute_key: 'Subjectivity',
        options: ['positive', 'negative', 'neutral', 'multi valued']
      },
      attribute10: {
        order: 10,
        title: '10. Factuality',
        attribute_key: 'Factuality',
        options: ['asserted', 'speculated', 'none']
      },
      attribute11: {
        order: 11,
        title: '11. Prominence',
        attribute_key: 'Prominence',
        options: ['new', 'prominent', 'presupposed']
      }
    }
  },
  data: [
    /**
     * {
     *     type: String, // "event" or "sentence"
     *     index: Integer,
     *     sent: ObjectID,
     *     doc: ObjectID,
     *     user: ObjectID,
     *     anchor_offset: Integer,
     *     focus_offset: Integer,
     *     entire_text: String,
     *     target_text: String,
     *     basket: {
     *         KnowledgeAwareness: "2_I_did_not_know",
     *         Tense: "1_past",
     *     },
     * }
     */
  ],
  is_empty_basket: function(basket) {
    for (let key in basket) {
      if (!basket[key].value) {
        return true;
      }
    }
    return false;
  },
  find_by_id: function(annotation_id) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.id === annotation_id) {
        return item;
      }
    }
    return null;
  },
  find_event: function(index, anchor_offset, focus_offset) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.type === 'event') continue;
      if (item.index !== index) continue;
      if (item.anchor_offset !== anchor_offset) continue;
      if (item.focus_offset !== focus_offset) continue;
      return i;
    }
    return -1;
  },
  add: function(item) {
    if (
      item.type === 'event' &&
      this.find_event(item.index, item.anchor_offset, item.focus_offset) !== -1
    )
      return;
    this.data.push(item);
  },
  update: function(annotation_id, new_item) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.id === annotation_id) {
        this.data[i] = new_item;
      }
    }
  },
  remove: function(annotation_id) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.id === annotation_id) {
        this.data.splice(i, 1);
        break;
      }
    }
  },
  remove_review: function(annotation_id) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.id === annotation_id) {
        const new_basket = JSON.parse(JSON.stringify(item.basket));
        for (let key in item.basket) {
          if (key.indexOf('-review') >= 0) {
            delete new_basket[key];
          }
        }
        this.data[i].basket = new_basket;
        break;
      }
    }
  },
  has_review: function(annotation) {
    for (let key in annotation.basket) {
      if (key.indexOf('-review') >= 0) {
        return true;
      }
    }
    return false;
  },
  random: function(range, type) {
    // to set initial value
    if (type === 'sentence') return 0;
    return Math.floor(Math.random() * range);
  }
};
