var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Tower.Model.Validator.Uniqueness = (function() {

  __extends(Uniqueness, Tower.Model.Validator);

  function Uniqueness() {
    Uniqueness.__super__.constructor.apply(this, arguments);
  }

  Uniqueness.prototype.validate = function(record, attribute, errors, callback) {
    var conditions, value;
    var _this = this;
    value = record.get(attribute);
    conditions = {};
    conditions[attribute] = value;
    return record.constructor.where(conditions).exists(function(error, result) {
      if (result) {
        return _this.failure(record, attribute, errors, Tower.t("model.errors.uniqueness", {
          attribute: attribute,
          value: value
        }), callback);
      } else {
        return _this.success(callback);
      }
    });
  };

  return Uniqueness;

})();

module.exports = Tower.Model.Validator.Uniqueness;
