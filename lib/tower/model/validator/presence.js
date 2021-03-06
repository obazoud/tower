var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Tower.Model.Validator.Presence = (function() {

  __extends(Presence, Tower.Model.Validator);

  function Presence() {
    Presence.__super__.constructor.apply(this, arguments);
  }

  Presence.prototype.validate = function(record, attribute, errors, callback) {
    if (!Tower.Support.Object.isPresent(record.get(attribute))) {
      return this.failure(record, attribute, errors, Tower.t("model.errors.presence", {
        attribute: attribute
      }), callback);
    }
    return this.success(callback);
  };

  return Presence;

})();

module.exports = Tower.Model.Validator.Presence;
