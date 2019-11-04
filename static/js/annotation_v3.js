const Annotation = {
  attributes: {
    sentence: {
      attribute1: {
        order: 1,
        title: '1. Knowledge Awareness',
        attribute_key: 'Knowledge_Awareness',
        options: {
          'I did not know the information': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'I am not familiar with the topic',
              'It is widely known (or taught) around the world'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'I am not familiar with the topic',
              'It is a factual information'
            ],
            'I am not familiar with the topic': [
              'I do not have background knowledge about the topic',
              'It is not a factual information',
              'It is a subjective statement',
              'I am an expert on the subject',
              'The information is (almost) common-sense knowledge'
            ],
            'This sentence does not contain any meaningful information': [
              'It is a question',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'It is merely a word play or an analogy',
              'The information is (almost) common-sense knowledge'
            ],
            'N/A': ['N/A']
          },
          'I already knew the information before I read this document': {
            'It is widely known (or taught) around the world': [
              'The information is (almost) common-sense knowledge',
              'It is highly publicized information',
              'I have background knowledge on the topic',
              'I know it from my personal experience',
              'I am not familiar with the topic'
            ],
            'I have background knowledge on the topic': [
              'I am an expert on the subject',
              'I am not an expert, but have some background knowledge',
              'It is widely known (or taught) around the world',
              'I know it from my personal experience',
              'I am not familiar with the topic'
            ],
            'I know it from my personal experience': [
              'I have a similar experience with the stated experience of the author',
              'It is widely known (or taught) around the world',
              'I have background knowledge on the topic',
              'I am not familiar with the topic',
              'It is a factual information'
            ],
            'N/A': ['N/A']
          },
          'I did not know the information before, but came to know it by reading the previous sentences': {
            'The same information was stated in one of the previous sentences': [
              'I learned the information from the previous sentences',
              'I am an expert on the subject',
              'The information is (almost) common-sense knowledge',
              'It is widely known (or taught) around the world',
              'I am not an expert, but have some background knowledge'
            ],
            'It is not directly stated so far, but I can infer it from the previous sentences': [
              'I could infer it by combining my background knowledge and the previous sentences',
              'I could infer it, although I do not have background knowledge on the topic',
              'Some of the other sentences in the document supports this statement',
              'The same information was stated in one of the previous sentences',
              'It is widely known (or taught) around the world'
            ],
            'N/A': ['N/A']
          },
          'N/A': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'This sentence gives no information to verify': [
              'It is a question',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'It is merely a word play or an analogy',
              'I can find the records to verify it, from short search using a few keywords'
            ]
          }
        }
      },
      attribute2: {
        order: 2,
        title: '2. Verifiability',
        attribute_key: 'Verifiability',
        options: {
          'I can verify it using my knowledge': {
            'I can logically verify the information': [
              'The information makes logical sense with my personal experience',
              'The information makes logical sense with my background knowledge',
              'I am familiar with the information',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless'
            ],
            'I am familiar with the information': [
              'It is widely known (or taught) around the world',
              'I have background knowledge on the topic',
              'I know it from my personal experience',
              'I can logically verify the information',
              'I do not have background knowledge about the topic'
            ],
            'N/A': ['N/A']
          },
          'I can verify it by short-time googling': {
            'It would be easy to find': [
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste the sentence, and I would find the records to verify it',
              'I would find a direct reference to verify it',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless'
            ],
            'I would find a direct reference to verify it': [
              'I would find multiple sources to verify it',
              'It would be easy to find',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'I can interview the people related to it'
            ]
          },
          'I can verify it by long-time googling': {
            'Detailed google search may lead to related records': [
              'I would eventually find direct reference / evidence to verify it',
              'I can find related statistics and infer the veracity of the sentence from the statistics',
              'The information may require deeper understanding of the situation',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless'
            ],
            'The information may require deeper understanding of the situation': [
              'Detailed google search may lead to related records',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'N/A': ['N/A']
          },
          'I might find an off-line way to verify it, but it will be very hard': {
            'I can interview the people related to it': [
              'I can interview work-related people / insiders',
              'I can interview friends / family',
              'I can interview local residents',
              'I could visit related places to obtain the information',
              'I can find the records to verify it, from short search using a few keywords'
            ],
            'I could visit related places to obtain the information': [
              'I can find some related records (e.g., medical record, personal notes)',
              'I can interview the people related to it',
              'It is a transition sentence that is meaningless',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'N/A': ['N/A']
          },
          'There is no way to verify it': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'This sentence gives no information to verify': [
              'It is a question',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'It is merely a word play or an analogy',
              'I can find the records to verify it, from short search using a few keywords'
            ],
            'N/A': ['N/A']
          },
          'N/A': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'This sentence gives no information to verify': [
              'It is a question',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'It is merely a word play or an analogy',
              'I can find the records to verify it, from short search using a few keywords'
            ]
          }
        }
      },
      attribute3: {
        order: 3,
        title: '3. Disputability',
        attribute_key: 'Disputability',
        options: {
          'Highly Disputable': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'It is a famous conflict',
              'Some people will disagree on it'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'It is a famous conflict',
              'Some people will disagree on it'
            ],
            'It is a famous conflict': [
              'It is a subjective statement',
              'It is not a factual information',
              'It is a factual information',
              "It is about author's experience",
              'The information is a statement of personal belief'
            ],
            'Some people will disagree on it': [
              'It is about controversial topics',
              'There are some other opinions that oppose this view that are equally as convincing',
              'It is not a factual information',
              'It is a subjective statement',
              'It is a famous conflict'
            ],
            'N/A': ['N/A']
          },
          Disputable: {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'It is a famous conflict',
              'Some people will disagree on it'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'It is a famous conflict',
              'Some people will disagree on it'
            ],
            'It is a famous conflict': [
              'It is a subjective statement',
              'It is not a factual information',
              'It is a factual information',
              "It is about author's experience",
              'The information is a statement of personal belief'
            ],
            'Some people will disagree on it': [
              'It is about controversial topics',
              'There are some other opinions that oppose this view that are equally as convincing',
              'It is not a factual information',
              'It is a subjective statement',
              'It is a famous conflict'
            ],
            'N/A': ['N/A']
          },
          'Weakly Disputable': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'Different views on the subject is possible',
              'Some may think different on some details'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'Different views on the subject is possible',
              'Some may think different on some details'
            ],
            'Different views on the subject is possible': [
              'Many would agree with, but some would still argue against it',
              'It is a subjective statement',
              'It is not a factual information',
              'Some may think different on some details',
              'It is a factual information'
            ],
            'Some may think different on some details': [
              'It is a subjective statement',
              'It is not a factual information',
              'Different views on the subject is possible',
              'It is a factual information',
              'It is a famous conflict'
            ],
            'N/A': ['N/A']
          },
          'Not Disputable': {
            'It is a factual information': [
              'It is (almost) a common sense',
              'The information is about a historic or public event',
              'It is a fact',
              'It is close to a fact',
              'It can easily be verified'
            ],
            'It is personal statement': [
              "It is about author's experience",
              'The information is a statement of personal belief',
              'It is a fact',
              'It is close to a fact',
              'It can easily be verified'
            ],
            'This sentence does not contain any meaningful information': [
              'It is a question',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'It is merely a word play or an analogy',
              'It is personal statement'
            ],
            'N/A': ['N/A']
          },
          'N/A': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'This sentence gives no information to verify': [
              'It is a question',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'It is merely a word play or an analogy',
              'I can find the records to verify it, from short search using a few keywords'
            ]
          }
        }
      },
      attribute4: {
        order: 4,
        title: '4. Acceptance',
        attribute_key: 'Acceptance',
        options: {
          'Strong Accept': {
            'It is a factual information': [
              'It is (almost) a common sense',
              'The information is about a historic or public event',
              'It is a fact',
              'It is close to a fact',
              'It can easily be verified'
            ],
            'It is not a factual information, but I agree with the statement': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement, but I agree with the statement',
              'It is a reasonable argument',
              'It is a fact'
            ],
            'It is a subjective statement, but I agree with the statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is a reasonable argument',
              'It is a fact',
              'It can easily be verified'
            ],
            'It is a reasonable argument': [
              'The author / source has sufficient credibility',
              'It is supported by solid arguments or evidence',
              'It presents logical consistency',
              'It contains no questionable details',
              'It is not a factual information, but I agree with the statement'
            ],
            'N/A': ['N/A']
          },
          Accept: {
            'It is a factual information': [
              'It is (almost) a common sense',
              'The information is about a historic or public event',
              'It is a fact',
              'It is close to a fact',
              'It can easily be verified'
            ],
            'It is not a factual information, but I agree with the statement': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement, but I agree with the statement',
              'It is a reasonable argument',
              'It is a fact'
            ],
            'It is a subjective statement, but I agree with the statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is a reasonable argument',
              'It is a fact',
              'It can easily be verified'
            ],
            'It is a reasonable argument': [
              'The author / source has sufficient credibility',
              'It is supported by solid arguments or evidence',
              'It presents logical consistency',
              'It contains no questionable details',
              'It is not a factual information, but I agree with the statement'
            ],
            'N/A': ['N/A']
          },
          'Weak Accept': {
            'It is a factual information': [
              'The information is about a historic or public event',
              'It is a fact',
              'It is close to a fact',
              'It is (almost) a common sense',
              'It can easily be verified'
            ],
            'It is not a factual information, but I somewhat agree with the statement': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement, but I somewhat agree with the statement',
              'I do not strongly support this, but I have no reason to reject it',
              'It is a fact'
            ],
            'It is a subjective statement, but I somewhat agree with the statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'I do not strongly support this, but I have no reason to reject it',
              'It is a fact',
              'It can easily be verified'
            ],
            'I do not strongly support this, but I have no reason to reject it': [
              'The author / source has sufficient credibility',
              'It presents logical consistency',
              'There is no counter evidence to reject it',
              'It is not a factual information, but I somewhat agree with the statement',
              'It is a fact'
            ],
            'N/A': ['N/A']
          },
          'Hard to Judge': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              "It's a subjective statement, therefore I'd neither accept nor reject it",
              'I don’t have enough information to judge',
              'It is a fact'
            ],
            "It's a subjective statement, therefore I'd neither accept nor reject it": [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'I don’t have enough information to judge',
              'It is a fact',
              'It can easily be verified'
            ],
            'I don’t have enough information to judge': [
              'I cannot reliably judge it in any meaningful way due to the lack of context',
              'I don’t have enough background knowledge to judge',
              'It is not a factual information',
              "It's a subjective statement, therefore I'd neither accept nor reject it",
              'The information is (almost) common-sense knowledge'
            ],
            'This sentence gives no information to judge': [
              'It is a question',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'It is merely a word play or an analogy',
              'I can find the records to verify it, from short search using a few keywords'
            ],
            'N/A': ['N/A']
          },
          'Weak Reject': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement, and  I do not agree with the statement',
              'It is not a reasonable argument, and I do not agree with the statement',
              'I do not like the way the author describes the information'
            ],
            'It is a subjective statement, and  I do not agree with the statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is a biased statement',
              'It is controversial and some would not agree with it',
              'I do not like the way the author describes the information'
            ],
            'It is not a reasonable argument, and I do not agree with the statement': [
              'The author / source has insufficient credibility',
              'It is not supported by solid arguments or evidence',
              'It lacks logical consistency',
              'It contains questionable details',
              'I do not like the way the author describes the information'
            ],
            'I do not like the way the author describes the information': [
              'It sounds like the author is exaggerating',
              'It is stated like a fact but it is not a fact',
              'It is a mixture of opinion and facts designed for a disguise or a dramatic effect',
              'It is an oversimplification',
              'The author is utilizing rhetoric devices to elicit emotional reaction'
            ],
            'N/A': ['N/A']
          },
          Reject: {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement, and  I do not agree with the statement',
              'It is not a reasonable argument, and I do not agree with the statement',
              'I do not like the way the author describes the information'
            ],
            'It is a subjective statement, and  I do not agree with the statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is a biased statement',
              'It is controversial and some would not agree with it',
              'I do not like the way the author describes the information'
            ],
            'It is not a reasonable argument, and I do not agree with the statement': [
              'The author / source has insufficient credibility',
              'It is not supported by solid arguments or evidence',
              'It lacks logical consistency',
              'It contains questionable details',
              'I do not like the way the author describes the information'
            ],
            'I do not like the way the author describes the information': [
              'It sounds like the author is exaggerating',
              'It is stated like a fact but it is not a fact',
              'It is a mixture of opinion and facts designed for a disguise or a dramatic effect',
              'It is an oversimplification',
              'The author is utilizing rhetoric devices to elicit emotional reaction'
            ],
            'N/A': ['N/A']
          },
          'Strong Reject': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement, and  I do not agree with the statement',
              'It is not a reasonable argument, and I do not agree with the statement',
              'I do not like the way the author describes the information'
            ],
            'It is a subjective statement, and  I do not agree with the statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is a biased statement',
              'It is controversial and some would not agree with it',
              'I do not like the way the author describes the information'
            ],
            'It is not a reasonable argument, and I do not agree with the statement': [
              'The author / source has insufficient credibility',
              'It is not supported by solid arguments or evidence',
              'It lacks logical consistency',
              'It contains questionable details',
              'I do not like the way the author describes the information'
            ],
            'I do not like the way the author describes the information': [
              'It sounds like the author is exaggerating',
              'It is stated like a fact but it is not a fact',
              'It is a mixture of opinion and facts designed for a disguise or a dramatic effect',
              'It is an oversimplification',
              'The author is utilizing rhetoric devices to elicit emotional reaction'
            ],
            'N/A': ['N/A']
          },
          'N/A': {
            'It is not a factual information': [
              'It is a speculative or hypothetical statement',
              'It is a vague (or not clear) statement',
              'It is a subjective statement',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'It is a subjective statement': [
              'It is a personal experience',
              'It is a subjective opinion / judgment / interpretation',
              'It is not a factual information',
              'I can find the records to verify it, from short search using a few keywords',
              'I can directly copy and paste of the sentence, and I would find the records to verify it'
            ],
            'This sentence gives no information to verify': [
              'It is a question',
              'It is not a complete sentence',
              'It is a transition sentence that is meaningless',
              'It is merely a word play or an analogy',
              'I can find the records to verify it, from short search using a few keywords'
            ]
          }
        }
      }
    }
  },
  event: {},
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
    return Math.floor(Math.random() * range);
  },
  shuffle_array: function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
};

const API = {
  get_doc: function(callback) {
    const doc_id = $('#doc_id').val();
    $.get({
      url: '/api/doc/' + doc_id
    }).done(function(data) {
      callback(JSON.parse(data));
    });
  },
  get_doc_by_local: function(prefix, callback) {
    let doc_id = $('#doc_id').val();
    let doc = localStorage.getItem(prefix + doc_id);
    if (doc) {
      callback(JSON.parse(doc));
    } else {
      callback(null);
    }
  },
  get_annotation: function(callback) {
    const doc_id = $('#doc_id').val();
    $.get({
      url: '/api/doc/' + doc_id + '/annotation'
    }).done(function(data) {
      callback(JSON.parse(data));
    });
  },
  get_review_annotation: function(callback) {
    const doc_id = $('#doc_id').val();
    const annotator_id = $('#annotator_id').val();
    $.get({
      url: '/api/review/' + annotator_id + '/doc/' + doc_id + '/annotation'
    }).done(function(data) {
      callback(JSON.parse(data));
    });
  },
  post_annotation: function(item, callback) {
    item.doc = $('#doc_id').val();
    $.ajax({
      url: '/api/annotation',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(item)
    })
      .done(function(data) {
        callback(JSON.parse(data));
      })
      .fail(function(data) {
        console.error(data);
        swal({
          title: '',
          text: 'Failed to save annotation, please check network.',
          type: 'error'
        });
      });
  },
  delete_annotation: function(annotation_id, callback) {
    $.ajax({
      url: '/api/annotation/' + annotation_id,
      type: 'DELETE'
    })
      .done(function() {
        toastr.success('Deleted');
        callback();
      })
      .fail(function(data) {
        console.error(data);
        swal({
          title: '',
          text: 'Failed to delete annotation, please check network.',
          type: 'error'
        });
      });
  },
  delete_review_annotation: function(annotation_id, callback) {
    $.ajax({
      url: '/api/review/annotation/' + annotation_id,
      type: 'DELETE'
    })
      .done(function() {
        toastr.success('Review was deleted');
        callback();
      })
      .fail(function(data) {
        console.error(data);
        swal({
          title: '',
          text: 'Failed to delete annotation, please check network.',
          type: 'error'
        });
      });
  },
  put_annotation: function(item, callback) {
    $.ajax({
      url: '/api/annotation/' + item.id,
      contentType: 'application/json',
      type: 'PUT',
      data: JSON.stringify(item)
    })
      .done(function(data) {
        toastr.success('Saved');
        callback(JSON.parse(data));
      })
      .fail(function(data) {
        console.error(data);
        swal({
          title: '',
          text: 'Failed to update annotation, please check network.',
          type: 'error'
        });
      });
  },
  put_review_annotation: function(item, callback) {
    $.ajax({
      url: '/api/review/annotation/' + item.id,
      contentType: 'application/json',
      type: 'PUT',
      data: JSON.stringify(item)
    })
      .done(function(data) {
        toastr.success('Review was saved');
        callback(JSON.parse(data));
      })
      .fail(function(data) {
        console.error(data);
        swal({
          title: '',
          text: 'Failed to update review, please check network.',
          type: 'error'
        });
      });
  }
};

const Event = {
  state: {
    view_mode: 'paragraph',
    target_sent: {
      index: 0,
      min: 0,
      max: 0
    }
  },
  selection_listen: function() {
    document.onmouseup = document.onkeyup = function() {
      const selection = window.getSelection();
      if (selection.type !== 'Range') return;

      const anchorNodeParent = selection.anchorNode.parentElement;
      const focusNodeParent = selection.focusNode.parentElement;

      if (
        anchorNodeParent.className !== 'type-event' &&
        anchorNodeParent.className !== 'type-sentence'
      )
        return;
      if (anchorNodeParent.className !== focusNodeParent.className) return;
      if (
        anchorNodeParent.getAttribute('data-index') !==
        focusNodeParent.getAttribute('data-index')
      )
        return;

      const index = Number(anchorNodeParent.getAttribute('data-index'));
      const entire_text = anchorNodeParent.innerText;
      const common_offset = entire_text.indexOf(selection.anchorNode.data);
      let anchor_offset = selection.anchorOffset + common_offset;
      let focus_offset = selection.focusOffset + common_offset;

      const selection_text = selection.toString();

      for (let i = 0; i < selection_text.length; i++) {
        // To detect &nbsp;(&nbsp;'s chartCode is 160 and space chartCode is 32).
        if (selection_text.charCodeAt(i) === 160 || selection_text[i] === ' ')
          anchor_offset++;
        else break;
      }
      for (let i = selection_text.length - 1; i >= 0; i--) {
        if (selection_text.charCodeAt(i) === 160 || selection_text[i] === ' ')
          focus_offset--;
        else break;
      }
      if (anchor_offset >= focus_offset) return;
      if (anchor_offset < 0 || anchor_offset > entire_text.length) return;
      if (focus_offset < 0 || focus_offset > entire_text.length) return;

      let type = 'event';
      if (anchorNodeParent.className === 'type-sentence') type = 'sentence';
      if (type === 'event') return;
      const item = {
        target_text: entire_text.substr(
          anchor_offset,
          focus_offset - anchor_offset
        ),
        index: index,
        anchor_offset: anchor_offset,
        focus_offset: focus_offset,
        type: type,
        basket: {}
      };

      const range = selection.getRangeAt(0);
      const bound = range.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      Modal.set_position(bound.left, bound.top + scrollTop);

      let attributes = Annotation.attributes[type];
      for (let key in attributes) {
        let options = attributes[key].options;
        let attribute_key = attributes[key].attribute_key;
        let initial_value = Object.keys(options)[0];
        initial_value = initial_value.split(' ').join('_');
        item.basket[attribute_key] = {
          initial_value: initial_value,
          value: '',
          memo: '',
          reason: ''
        };
      }

      API.post_annotation(item, function(data) {
        const annotation_item = data['annotation'];
        Annotation.add(annotation_item);
        Renderer.render_table();

        Modal.set_annotation_item(annotation_item);

        if (annotation_item.type === 'sentence') {
          Modal.show();
          Modal.state.step = 0;
          Modal.next_step();
        }
      });
    }.bind(this);
  },
  listen_view_mode: function() {
    $('#view-mode-btn').click(function() {
      if (Event.state.view_mode === 'paragraph') {
        Event.state.view_mode = 'sentence';
        $('#view-mode-btn span').html('paragraph mode');
        $('table').removeClass('table-striped');
        $('.progress').show();
      } else {
        Event.state.view_mode = 'paragraph';
        $('#view-mode-btn span').html('sentence mode');
        $('table').addClass('table-striped');
        $('.progress').hide();
      }
      Renderer.render_table();
    });
  },
  listen_annotation_badge: function() {
    $('.annotation-badge').click(function(e) {
      const annotation_id = $(this).attr('data-id');
      const annotation_item = Annotation.find_by_id(annotation_id);

      Modal.set_position(e.pageX, e.pageY);
      Modal.set_annotation_item(annotation_item);
      Modal.show();
      Modal.state.step = 0;
      Modal.next_step();
    });
  },
  listen_annotation_review_badge: function() {
    $('.annotation-badge').click(function(e) {
      const annotation_id = $(this).attr('data-id');
      const annotation_item = Annotation.find_by_id(annotation_id);

      Modal.set_position(e.pageX, e.pageY);
      Modal.set_annotation_item(annotation_item);
      Modal.show_review();
      Modal.state.step = 0;
      Modal.next_review_step();
    });
  },
  listen_tooltip: function() {
    $('[data-toggle="tooltip"]').tooltip();
    // $('[data-toggle="tooltip"]').tooltip('show');
  },
  listen_key: function() {
    $(document).keydown(function(e) {
      switch (e.which) {
        case 13: // enter
          break;
        case 37: // left
          if (Modal.state.open) break;
          if (Event.state.target_sent.index > Event.state.target_sent.min) {
            Event.state.target_sent.index--;
          }
          $('#sentence-index').html(Event.state.target_sent.index + 1);
          Renderer.render_table();
          e.preventDefault();
          break;
        case 39: // right
          if (Modal.state.open) break;
          if (Event.state.target_sent.index < Event.state.target_sent.max) {
            Event.state.target_sent.index++;
          }
          $('#sentence-index').html(Event.state.target_sent.index + 1);
          Renderer.render_table();
          e.preventDefault();
          break;
        case 38: // up
          break;
        case 40: // down
          break;
        case 49: // 1
          break;
        case 50: // 2
          break;
        case 51: // 3
          break;
        case 52: // 4
          break;
        case 53: // 5
          break;
        default:
          return;
      }
    });
  }
};

const Modal = {
  el: null,
  state: {
    mode: 'annotation', // annotation, review
    step: 1,
    open: false,
    annotation_item: {},
    max_attribute: 4
  },
  init: function(mode) {
    this.el = $('#modal');
    if (mode) {
      this.state.mode = mode;
    }
    this.el.modal({
      show: false
    });
    this.el.draggable({
      handle: '.modal-header'
    });

    this.el.on('hidden.bs.modal', function(e) {
      Modal.state.open = false;
    });
    this.el.on('shown.bs.modal', function(e) {
      Modal.state.open = true;
    });

    $('#modal-delete-btn').click(function() {
      const annotation_id = Modal.state.annotation_item.id;
      API.delete_annotation(Modal.state.annotation_item.id, function() {
        Annotation.remove(annotation_id);
        Renderer.render_table();
        Modal.el.modal('hide');
      });
    });
    // delete_review_annotation

    $('#modal-save-btn').click(function() {
      const success = Modal.save();
      if (success) Modal.el.modal('hide');
    });
  },
  next_step() {
    if (this.state.step === this.state.max_attribute) {
      return;
    }
    const step = this.state.step + 1;
    Modal.state.step = step;

    const annotation_type = this.state.annotation_item.type;
    const attribute_id = 'attribute' + step;
    const attribute_key =
      Annotation.attributes[annotation_type][attribute_id].attribute_key;
    this.state.annotation_item.basket[
      attribute_key
    ].opened_at = new Date().toISOString();

    $('#' + attribute_id + ' .dropdown-item').removeClass('active');
    $('#' + attribute_id + ' .dropdown-item:first-child').addClass('active');

    setTimeout(function() {
      $('#attribute' + step + '-val').click();
      setTimeout(function() {
        $('#attribute' + step + ' .active').focus();
      }, 100);
    }, 200);

    $('.input-group-text').removeClass('text-primary');
    $('#attribute' + step)
      .parents('.input-group')
      .find('.input-group-text')
      .addClass('text-primary');
    $('.dropdown-toggle').removeClass('text-primary');
    $('#attribute' + step + '-val').addClass('text-primary');
  },
  set_annotation_item: function(annotation_item) {
    this.state.annotation_item = annotation_item;
  },
  load_attributes: function() {
    const annotation_type = this.state.annotation_item.type;
    const basket = this.state.annotation_item.basket;
    for (let i = 1; i <= this.state.max_attribute; i++) {
      const attribute_id = 'attribute' + i;

      const attribute_key =
        Annotation.attributes[annotation_type][attribute_id].attribute_key;
      let value = basket[attribute_key].value;
      let reason1 = basket[attribute_key].reason1;
      let reason2 = basket[attribute_key].reason2;

      // if (!value) value = $('#' + attribute_id + ' .dropdown-item:first-child').attr('data-value');

      // $('#' + attribute_id + '-memo').val(basket[attribute_key].memo);
      // $('#' + attribute_id + '-reason').val(basket[attribute_key].reason);

      if (value)
        $('#' + attribute_id + '-val').html(value.split('_').join(' '));

      if (reason1)
        $('#' + attribute_id + '-reason1-val').html(
          reason1.split('_').join(' ')
        );
      if (reason2)
        $('#' + attribute_id + '-reason2-val').html(
          reason2.split('_').join(' ')
        );

      $('#' + attribute_id + ' .dropdown-item').removeClass('active');
      $(
        '#' + attribute_id + ' .dropdown-item[data-value="' + value + '"]'
      ).addClass('active');
    }
  },
  show: function() {
    this.set_header();
    this.el.modal('show');

    const annotation_type = this.state.annotation_item.type;
    this.change_type(annotation_type);
    this.render_input(annotation_type);
    this.load_attributes();
  },
  render_input: function(type) {
    $('#col1').html('');
    $('#col2').html('');

    let attributes = Annotation.attributes[type];
    for (let key in attributes) {
      let title = attributes[key].title;
      let options = attributes[key].options;
      let order = attributes[key].order;

      let input_group_template = $(
        '#attribute-reason-input-group-template'
      ).html();

      input_group_template = input_group_template
        .split('<%attribute%>')
        .join(key);
      input_group_template = input_group_template
        .split('<%title%>')
        .join(title);

      if (order <= 6) {
        $('#col1').append(input_group_template);
      } else {
        $('#col2').append(input_group_template);
      }

      options = Annotation.shuffle_array(Object.keys(options));
      for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let button_template = $('#attribute-button-template').html();
        let value = option.split(' ').join('_');
        button_template = button_template.replace('<%value%>', value);
        button_template = button_template.replace('<%value_space%>', option);

        $('#' + key + ' .dropdown-menu').append(button_template);
      }
    }
    this.input_listen();
  },
  set_header: function() {
    const type = this.state.annotation_item.type;
    let title = 'Event: ' + this.state.annotation_item.target_text;
    if (type === 'sentence') {
      title = 'Sentence ' + this.state.annotation_item.index;
    }
    this.el.find('.modal-title').html(title);
  },
  set_position: function(left, top) {
    const window_width = document.body.clientWidth;

    const margin = 20;
    let calibrated_left = Math.max(margin, left - 450);
    calibrated_left = Math.min(calibrated_left, window_width - 850 - margin);
    this.el.css('left', calibrated_left);
    this.el.css('top', top + 50);
  },
  save: function() {
    const annotation_type = this.state.annotation_item.type;
    for (let i = 1; i <= this.state.max_attribute; i++) {
      const attribute_id = 'attribute' + i;
      const value = $('#' + attribute_id + '-val')
        .html()
        .trim()
        .split(' ')
        .join('_');
      const attribute_key =
        Annotation.attributes[annotation_type][attribute_id].attribute_key;
      this.state.annotation_item.basket[attribute_key].value = value;

      const reason1 = $('#' + attribute_id + '-reason1-val')
        .html()
        .trim()
        .split(' ')
        .join('_');
      const reason2 = $('#' + attribute_id + '-reason2-val')
        .html()
        .trim()
        .split(' ')
        .join('_');

      if (!reason1 || !reason2) {
        toastr.warning('Please annotate on all attributes.', '', {
          progressBar: false
        });
        return false;
      }

      this.state.annotation_item.basket[attribute_key].reason1 = reason1;
      this.state.annotation_item.basket[attribute_key].reason2 = reason2;
    }

    API.put_annotation(this.state.annotation_item, function() {
      Annotation.update(
        Modal.state.annotation_item.id,
        Modal.state.annotation_item
      );
      Renderer.render_table();
    });
    return true;
  },
  change_type: function(type) {
    let width = '850px';
    this.state.max_attribute = Object.keys(Annotation.attributes[type]).length;
    if (type === 'event') {
      $('#col1')
        .removeClass('col-md-12')
        .addClass('col-md-6');
      $('#col2').show();

      for (let i = 6; i <= 11; i++) {
        $('#attribute' + i)
          .parents('.input-group')
          .show();
      }
    } else {
      $('#col1')
        .removeClass('col-md-6')
        .addClass('col-md-12');
      $('#col2').hide();
      for (let i = 6; i <= 11; i++) {
        $('#attribute' + i)
          .parents('.input-group')
          .hide();
      }
      width = '950px';
    }
    $('#modal')
      .css('width', width)
      .css('max-width', width);
    $('#modal .modal-content')
      .css('width', width)
      .css('min-width', width);
  },
  input_listen: function() {
    $('.dropdown-item').unbind('click');
    $('.dropdown-item').click(function() {
      const annotation_type = Modal.state.annotation_item.type;
      const dropdown = $(this).parents('.dropdown');
      let attribute_id = dropdown.attr('id');
      const value = $(this).attr('data-value');

      dropdown.find('.dropdown-toggle').html(value.split('_').join(' '));
      Modal.state.step = Number(
        attribute_id
          .replace('attribute', '')
          .replace('-val', '')
          .replace('-reason2', '')
          .replace('-reason1', '')
      );

      if (attribute_id.indexOf('reason') < 0) {
        const attribute_key =
          Annotation.attributes[annotation_type][attribute_id].attribute_key;
        Modal.state.annotation_item.basket[
          attribute_key
        ].updated_at = new Date().toISOString();

        $('#' + attribute_id + ' .dropdown-item').removeClass('active');
        $(
          '#' + attribute_id + ' .dropdown-item[data-value="' + value + '"]'
        ).addClass('active');

        // set first reason options
        let attributes = Annotation.attributes[annotation_type];
        let options =
          attributes[attribute_id].options[value.split('_').join(' ')];
        const reason1_dropdown = $(
          '#' + attribute_id + '-reason1 .dropdown-menu'
        );
        reason1_dropdown.html('');

        options = Annotation.shuffle_array(Object.keys(options));
        for (let i = 0; i < options.length; i++) {
          let option = options[i];
          let button_template = $('#attribute-button-template').html();

          let value = option.split(' ').join('_');
          button_template = button_template.replace('<%value%>', value);
          button_template = button_template.replace('<%value_space%>', option);

          reason1_dropdown.append(button_template);

          if (i === 0) {
            $('#' + attribute_id + '-reason1-val').html(option);
            $('#' + attribute_id + '-reason2-val').html('');
            $('#' + attribute_id + '-reason1 .dropdown-item').removeClass(
              'active'
            );
            $(
              '#' +
                attribute_id +
                '-reason1 .dropdown-item[data-value="' +
                value +
                '"]'
            ).addClass('active');
          }
        }

        setTimeout(function() {
          $('#attribute' + Modal.state.step + '-reason1-val').click();
          setTimeout(function() {
            $('#attribute' + Modal.state.step + '-reason1 .active').focus();
          }, 100);
        }, 200);

        $('.input-group-text').removeClass('text-primary');
        $('#attribute' + Modal.state.step + '-reason1')
          .parents('.input-group')
          .find('.input-group-text')
          .addClass('text-primary');
        $('.dropdown-toggle').removeClass('text-primary');
        $('#attribute' + Modal.state.step + '-reason1-val').addClass(
          'text-primary'
        );

        Modal.input_listen();
      } else if (attribute_id.indexOf('reason1') >= 0) {
        $('#' + attribute_id + ' .dropdown-item').removeClass('active');
        $(
          '#' + attribute_id + ' .dropdown-item[data-value="' + value + '"]'
        ).addClass('active');

        attribute_id = attribute_id.replace('-reason1', '');
        const option_value = $('#' + attribute_id + '-val')
          .html()
          .trim();

        // set second reason options
        let attributes = Annotation.attributes[annotation_type];
        let options =
          attributes[attribute_id].options[option_value][
            value.split('_').join(' ')
          ];
        const reason2_dropdown = $(
          '#' + attribute_id + '-reason2 .dropdown-menu'
        );
        reason2_dropdown.html('');
        options = Annotation.shuffle_array(options);
        for (let i = 0; i < options.length; i++) {
          let option = options[i];
          let button_template = $('#attribute-button-template').html();

          let value = option.split(' ').join('_');
          button_template = button_template.replace('<%value%>', value);
          button_template = button_template.replace('<%value_space%>', option);

          reason2_dropdown.append(button_template);

          if (i === 0) {
            $('#' + attribute_id + '-reason2-val').html(option);
            $('#' + attribute_id + '-reason2 .dropdown-item').removeClass(
              'active'
            );
            $(
              '#' +
                attribute_id +
                '-reason2 .dropdown-item[data-value="' +
                value +
                '"]'
            ).addClass('active');
          }
        }

        setTimeout(function() {
          $('#attribute' + Modal.state.step + '-reason2-val').click();
          setTimeout(function() {
            $('#attribute' + Modal.state.step + '-reason2 .active').focus();
          }, 100);
        }, 200);

        $('.input-group-text').removeClass('text-primary');
        $('#attribute' + Modal.state.step + '-reason2')
          .parents('.input-group')
          .find('.input-group-text')
          .addClass('text-primary');
        $('.dropdown-toggle').removeClass('text-primary');
        $('#attribute' + Modal.state.step + '-reason2-val').addClass(
          'text-primary'
        );

        Modal.input_listen();
      } else if (attribute_id.indexOf('reason2') >= 0) {
        $('#' + attribute_id + ' .dropdown-item').removeClass('active');
        $(
          '#' + attribute_id + ' .dropdown-item[data-value="' + value + '"]'
        ).addClass('active');

        Modal.next_step();
      }
    });
  }
};

const Renderer = {
  state: {
    sents: [],
    mode: 'annotation' // annotation, review,
  },
  set_mode: function(mode) {
    this.state.mode = mode;
  },
  load_annotation_and_render_table: function() {
    API.get_annotation(function(data) {
      Annotation.data = data['annotations'];
      Renderer.render_table();
    });
  },
  render_table: function() {
    const sents = this.state.sents;

    const tbody = $('#tbody');
    tbody.html('');

    // make annotation map
    const annotation_map = {};
    for (let i = 0; i < sents.length; i++) {
      annotation_map[sents[i].index] = [];
    }
    for (let i = 0; i < Annotation.data.length; i++) {
      const item = Annotation.data[i];
      annotation_map[item.index].push(item);
    }

    for (let i = 0; i < sents.length; i++) {
      const sent = sents[i];
      let tr = $('#tr-template').html();

      const index = sent['index'];
      const text = sent['text'];

      const annotations = annotation_map[Number(index)];

      tr = tr.split('<%index%>').join(sent['index']);
      tr = tr.replace(
        '<%text%>',
        this.render_markup_sentence(Number(index), text, annotations)
      );

      let sent_col = 'Sent' + index;
      let sent_markup = '';
      let sentence_type_index = -1;
      for (let j = 0; j < annotations.length; j++) {
        if (annotations[j].type === 'sentence') {
          sentence_type_index = j;
          break;
        }
      }
      if (sentence_type_index !== -1) {
        const annotation_item = annotations[sentence_type_index];
        let badge_type = 'primary';
        if (Annotation.is_empty_basket(annotation_item.basket)) {
          badge_type = 'secondary';
        }
        if (Annotation.has_review(annotation_item)) {
          badge_type = 'dark';
        }
        sent_markup +=
          '<span class="badge badge-' +
          badge_type +
          ' annotation-badge" data-id="' +
          annotation_item.id +
          '" ';
        sent_markup +=
          'data-toggle="tooltip" data-placement="right" data-html="true" title="' +
          this.render_tooltip_markup(annotation_item) +
          '">';
        sent_markup += sent_col + '</span>';
        tr = tr.replace('<%sent%>', sent_markup);
      } else {
        tr = tr.replace('<%sent%>', sent_col);
      }

      tbody.append(tr);
    }

    if (Event.state.view_mode === 'sentence') {
      $('.tr-sentence').hide();
      $('#tr-' + Event.state.target_sent.index).show();

      const target_sent = Event.state.target_sent;
      let ratio =
        ((target_sent.index - target_sent.min + 1) /
          (target_sent.max - target_sent.min + 1)) *
        100;
      $('.progress-bar').css('width', ratio + '%');
    }

    if (this.state.mode === 'review') {
      Event.listen_annotation_review_badge();
    } else {
      Event.listen_annotation_badge();
    }

    Event.listen_tooltip();
  },
  render_markup_sentence: function(index, text, annotations) {
    text = text.split('<').join('&lt;');
    text = text.split('>').join('&gt;');

    const start = {},
      end = {};
    for (let i = 0; i < annotations.length; i++) {
      const item = annotations[i];
      if (item.type !== 'event') continue;
      if (item.index !== index) continue;
      start[item.anchor_offset] = i;
      end[item.focus_offset] = i;
    }
    let markup = '';

    for (let i = 0; i < text.length; i++) {
      if (i in start) {
        const annotation_item = annotations[start[i]];
        let badge_type = 'success';
        if (Annotation.is_empty_basket(annotation_item.basket)) {
          badge_type = 'secondary';
        }

        markup +=
          '<span class="badge badge-' +
          badge_type +
          ' annotation-badge" data-id="' +
          annotation_item.id +
          '" ';
        markup +=
          'data-toggle="tooltip" data-placement="right" data-html="true" title="' +
          this.render_tooltip_markup(annotation_item) +
          '">';
      }

      if (text[i] !== ' ') {
        markup += text[i];
      } else {
        markup += '&nbsp;';
      }

      if (i + 1 in end) {
        markup += '</span>';
      }
    }
    markup = markup.split('\n').join('<br/>');
    return markup;
  },
  render_tooltip_markup: function(annotation_item) {
    let markup = '';
    const annotation_type = annotation_item['type'];
    for (let key in Annotation.attributes[annotation_type]) {
      const attribute_key =
        Annotation.attributes[annotation_type][key].attribute_key;
      const order = Annotation.attributes[annotation_type][key].order;
      if (
        attribute_key in annotation_item.basket &&
        annotation_item.basket[attribute_key].value
      ) {
        markup +=
          order +
          '. ' +
          attribute_key +
          ': <em>' +
          annotation_item.basket[attribute_key].value +
          '</em><br/>';
      }
    }
    return markup;
  }
};

const TextReader = {
  data_text: '',
  data_json: {},
  listen: function() {
    let input = document.getElementById('doc-uploader');
    input.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        let myFile = this.files[0];
        let reader = new FileReader();
        reader.addEventListener('load', function(e) {
          TextReader.data_text = e.target.result;
          TextReader.data_text = TextReader.decode_string(
            TextReader.data_text,
            $('#ENCRYPTION_KEY').val()
          );
          TextReader.data_json = JSON.parse(TextReader.data_text);
          let doc_id = $('#doc_id').val();

          if (doc_id === TextReader.data_json['doc_id']) {
            localStorage.setItem(
              TextReader.data_json['doc_id'],
              TextReader.data_text
            );
            location.reload();
          } else {
            swal({
              title: '',
              text: 'The document number does not match.',
              type: 'error'
            });
          }
          console.log(TextReader.data_json);
        });
        reader.readAsBinaryString(myFile);
      }
    });
  },
  decode_string: function(input, key) {
    input = input.split(',');
    let c = '';
    while (key.length < input.length) {
      key += key;
    }
    for (let i = 0; i < input.length; i++) {
      let value1 = input[i];
      let value2 = key[i].charCodeAt(0);

      let xor = value1 ^ value2;
      c += String.fromCharCode(xor);
    }
    return c;
  }
};
