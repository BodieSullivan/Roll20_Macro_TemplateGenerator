function Template() {
  this.type = 'ability';
  this.title = '';
  this.subheader = '';
  this.subheader2 = '';
  this.subheader_right = '';
  this.subheader_left = '';
  this.emote = '';
  this.items = [];





}

function TemplateItem(id, text, value) {
  this.id = id;
  this.text = text;
  this.value = value;
}

Template.prototype.buildTemplate = function() {

  var template = '&{template:5eDefault} ';

  if (this.type !== '') {
    template += '{{' + this.type + '=1}} ';
  }

  if (this.title !== '') {
      template += '{{title=' + this.title + '}} ';
  }

  if (this.subheader !== '') {
        template += '{{subheader=' + this.subheader + '}} ';
  }

  if (this.subheader2 !== '') {
    template += '{{subheader2=' + this.subheader2 + '}} ';
  }

  if (this.emote !== '') {
    template += '{{emote=' + this.emote + '}} ';
  }

  template += '{{showclassactions=1}} ';

  for (var i = 0; i < this.items.length; i++) {
      template += '{{' + this.items[i].text + '=' +  this.items[i].value + '}} ';
  }

  return template;
}

Template.prototype.addCustomItem = function() {
  this.items.push(new TemplateItem(this.items.length + 1, '', ''));
}
