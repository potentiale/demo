var e = require;
var t = module;
var o = exports;
"use strict";
var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) })(e, t)
    }, function(e, t) {
        function o() { this.constructor = e }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }),
    a = this && this.__decorate || function(e, t, o, n) {
        var i, a = arguments.length,
            r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);
        else
            for (var s = e.length - 1; 0 <= s; s--)(i = e[s]) && (r = (a < 3 ? i(r) : 3 < a ? i(t, o, r) : i(t, o)) || r);
        return 3 < a && r && Object.defineProperty(t, o, r), r
    };
Object.defineProperty(o, "__esModule", { value: !0 });
var r, l = e("AppCommon"),
    s = e("CCTool"),
    c = e("ListenID"),
    p = e("ElementBase"),
    d = e("GameScene"),
    u = e("AIState"),
    f = e("FSMBase"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = f.default, i(h, r), h.prototype.initState = function(e) {
        var t = this;
        cc.log("初始化所有状态"), this.ower = e, this._AiParameter = new u.AiParameter, this._AiParameter.moveSpeed = this.ower.attribute.data.MoveSpeedGhost, this._AiParameter.AttackRange = 120, this.statesList[u.StateType.Idle] = new u.IdleState(this), this.statesList[u.StateType.Treat] = new g(this), this.statesList[u.StateType.Die] = new u.DieState(this), this.statesList[u.StateType.Attack] = new u.AttackState(this), this.statesList[u.StateType.Ready] = new u.ReadyState(this), this.setAIState(u.StateType.Idle), this.schedule(this.setIdleDialogue, 3.5), this.setIdleDialogue(), l.default.MapClr.myMap.node.on(c.ListenID.GameState, function() { l.default.GScene._GameState == d.GAME_STATE.Game && (t.unschedule(t.setIdleDialogue), t.setAIState(u.StateType.Attack), l.default.MapClr.newEffects(t.node.position, "heal", function(e) { e.setParent(l.default.MapClr.myMap.node), e.setPosition(t.node.x, t.node.y + 100) })) }, this), this.CDManage = new s.CCTool.CDManage, this.CDManage.UpCDFun = { atk: function() { return 1 / (t.ower.attribute.data.atkspeed - t.ower.attribute.data.atkspeed * (t.target ? t.target._atkSpeedDown : 0) + t.ower.isRageAtkSpeed) }, think: function() { return .1 }, atkDialogue: function() { return 10 }, treat: function() { return 1 } }, this.CDManage.Init(), this.startPos = l.default.MapClr.getMapPos(this.node.position), this.startPosV2 = this.node.position.add(cc.v2(0, 100))
    }, h.prototype.newThink = function() { this.CDManage.Check("think") && (this.CDManage.Set("think"), this.searchRole()) }, h.prototype.checkSkill = function() {}, h.prototype.getIsInRoom = function(e) { var t = l.default.MapClr.getMapPos(this.node.position); return !!(e.myBed && e.myBed.myTerritoryMap && e.myBed.myTerritoryMap[t.x] && e.myBed.myTerritoryMap[t.x][t.y]) }, h.prototype.checkinRange = function(e, t, o, n) {
        for (var i = 0, a = n.length / 2; i < a; i++) {
            var r = n[2 * i],
                s = n[2 * i + 1];
            if (e == o.x + r && t == o.y + s) return !0
        }
        return !1
    }, h.prototype.searchRole = function() {
        this.target = null, this.attackTarget = null;
        var e = l.default.MapClr.getMapPos(this.node.position);
        for (a in l.default.MapClr.roleList) {
            var t = l.default.MapClr.roleList[a];
            if (t.myDoor) {
                this.target = t;
                var o = null === (t = this.target.myBed) || void 0 === t ? void 0 : t.myTerritoryMap;
                if (o && 0 < o.length)
                    for (var n in o)
                        for (var i in o[n])(r = o[n][i]).arc && r.arc.node.active && 0 < r.arc._life && this.checkinRange(Number(n), Number(i), e, this._searchPosOffset) && (this.attackTarget = r.arc)
            }
        }
        if (!this.attackTarget)
            for (var a in l.default.MapClr.roleList) {
                var r = l.default.MapClr.roleList[a],
                    s = l.default.MapClr.getMapPos(r.node.position);
                if (0 < r._life && this.checkinRange(s.x, s.y, e, this._searchPosOffset)) { this.target = r, this.attackTarget = r; break }
            }
        if (!this.attackTarget)
            for (var c in l.default.MapClr.bedList) { c = l.default.MapClr.bedList[c]; if (c && 0 < c._life && null == c.ower && (s = l.default.MapClr.getMapPos(c.node.position), this.checkinRange(s.x, s.y, e, this._searchPosOffset))) { this.attackTarget = c; break } }
        this._AttackTime = 0
    }, h.prototype.searchPath = function() {}, h.prototype.onMoveEnd = function() { this.ower.mySkeleton.timeScale = 1, this.setAIState(u.StateType.Idle), this.CDManage.Clear("atk") }, h.prototype.checkAttack = function() {}, h.prototype.attackRoleById = function() {}, h.prototype.searchAttackRole = function() {}, h.prototype.sendAttack = function(e) { this.CDManage.Check("atk") && e && e.isValid && (this.CDManage.Set("atk"), this.ower.mySkeleton.timeScale = 1 / this.CDManage.limt.atk, this.ower.mySkeleton.node.scaleX = this.node.x > e.x ? 1 : -1, this.setAIState(u.StateType.Attack), this.ower.setHurt(e)) }, h.prototype.checkLife = function() {}, h.prototype.renounceTarget = function() {}, h.prototype.getTreatmentPoint = function() {
        var t = this;
        this.ower.mySkeleton.timeScale = this._AiParameter.moveSpeed / 160, this.schedule(this.setTreatment, 1), this.ower.node.setPosition(this.startPosV2), l.default.MapClr.newDialogue(this.node, cc.v2(20, 150), l.default.GetArrTarge(this.DialogueList[u.StateType.Escape]), 3), this.healEffects || l.default.MapClr.newEffects(this.node.position, "heal", function(e) { e.setParent(t.node), e.setPosition(0, 0), e.zIndex = t.node.zIndex + 1, t.healEffects = e, t.healEffects.active = !1 })
    }, h.prototype.setTreatment = function() { this.healEffects && this.healEffects.isValid && (this.healEffects.active || l.default.MapClr.newDialogue(this.node, cc.v2(20, 150), l.default.GetArrTarge(this.DialogueList[u.StateType.Treat]), 9), this.healEffects.active = !0), this.ower.setLife(new p.HurtData(.1 * this.ower.attribute.data.hp)), .95 < this.ower._lifeRatio && (this.healEffects && (this.healEffects.active = !1), this.unschedule(this.setTreatment), this.ower.mySkeleton.timeScale = 1, this.setAIState(u.StateType.Attack), this.ower.setAnimation("idle", !0)) }, h.prototype.onDestroy = function() { this.unscheduleAllCallbacks() }, h.prototype.onUplv = function() {}, h.prototype.update = function(e) { var t, o;!l.default.GScene.isPause && this.ower._isActive && l.default.GScene._GameState == d.GAME_STATE.Game && (this.CDManage.OnUpdate(e), this.newThink(e), this.CDManage.Up("atk"), this.attackTarget ? (this.setAtkDialogue(), this.sendAttack(this.attackTarget.node)) : (t = l.default.getDistanceSqrt(this.startPosV2, this.node.position), !this._isInTreatRect && this.ower._lifeRatio < .98 && t <= 2e3 && this.currentState != u.StateType.Treat && this.CDManage.Check("treat") && (this.CDManage.Set("treat"), this.setAIState(u.StateType.Treat), this.getTreatmentPoint(), this._isInTreatRect = !0), 6200 < t && (this._isInTreatRect = !1), this.currentState != u.StateType.Treat && (0 == (o = l.default.GScene.joyStick.linearVelocity).x && 0 == o.y ? this.ower.setAnimation("idle", !0) : this.ower.setAnimation("move", !0))), l.default.GScene._PlayerState == d.PLAYER_STATE.Move && !this.ower._isControl && this.CDManage.Check("treat") && (0 == (o = l.default.GScene.joyStick.linearVelocity).x && 0 == o.y || (this.ower.mySkeleton.node.scaleX = 0 < o.x ? -1 : 1, this.currentState == u.StateType.Treat && (this.healEffects && (this.healEffects.active = !1), this.unschedule(this.setTreatment), this.ower.mySkeleton.timeScale = 1, this.setAIState(u.StateType.Attack), this.ower.setAnimation("idle", !0)), l.default.GScene.GameCamera.node.position = this.ower.node.position), cc.Vec2.multiplyScalar(y, o.normalizeSelf(), this._AiParameter.moveSpeed * e), cc.Vec2.add(y, this.ower.node.position, y), this.ower.node.setPosition(y), this.ower.getZIndex(), this.currentStateClr.OnUpdate(e))) }, h.prototype.setIdleDialogue = function() {
        var e = this.DialogueList[u.StateType.Idle][this.DialogueNum];
        e ? (l.default.MapClr.newDialogue(this.node, cc.v2(20, 150), e, 2.5), this.DialogueNum++) : this.DialogueNum = 0
    }, h.prototype.setAtkDialogue = function() { this.CDManage.Check("atkDialogue") && (this.CDManage.Set("atkDialogue"), l.default.MapClr.newDialogue(this.node, cc.v2(20, 150), l.default.GetArrTarge(this.DialogueList[u.StateType.Attack]), 3)) }, a([e], h));

function h() { var e = null !== r && r.apply(this, arguments) || this; return e.statesList = [], e._searchPosOffset = [0, 0, 1, 0, 0, 1, -1, 0, 0, -1, 1, 1, -1, -1, -1, 1, 1, -1], e._AttackTime = 0, e._isInTreatRect = !0, e._time = 0, e.DialogueNum = 0, e.DialogueList = {}, e }
o.default = e;
var m, y = cc.v2(),
    g = (m = u.AIStateBase, i(_, m), _.prototype.OnEnter = function() { this._myTarget.setAnimation("sitting1", !0) }, _.prototype.OnUpdate = function() {}, _.prototype.OnExit = function() {}, _);

function _() { return null !== m && m.apply(this, arguments) || this }