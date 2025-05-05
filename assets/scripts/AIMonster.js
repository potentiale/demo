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
var r, s = e("AppCommon"),
    c = e("CCTool"),
    l = e("ListenID"),
    p = e("ElementBase"),
    d = e("GameScene"),
    u = e("AIState"),
    f = e("FSMBase"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = f.default, i(h, r), h.prototype.initState = function(e) {
        var t = this;
        cc.log("初始化所有状态"), this.ower = e, this._AiParameter = new u.AiParameter, this._AiParameter.moveSpeed = this.ower.attribute.data.MoveSpeedGhost, this._AiParameter.AttackRange = this.ower.attribute.data.AttackRangeGhost, this.statesList[u.StateType.Idle] = new u.IdleState(this), this.statesList[u.StateType.Move] = new u.MoveState(this), this.statesList[u.StateType.Treat] = new g(this), this.statesList[u.StateType.Escape] = new _(this), this.statesList[u.StateType.Die] = new u.DieState(this), this.statesList[u.StateType.Attack] = new u.AttackState(this), this.statesList[u.StateType.Ready] = new u.ReadyState(this), this.setAIState(u.StateType.Idle), this.schedule(this.setIdleDialogue, 3.5), this.setIdleDialogue(), s.default.MapClr.myMap.node.on(l.ListenID.GameState, function() { s.default.GScene._GameState == d.GAME_STATE.Game && t.unschedule(t.setIdleDialogue) }, this), this.CDManage = new c.CCTool.CDManage, this.CDManage.UpCDFun = { atk: function() { return 1 / (t.ower.attribute.data.atkspeed - t.ower.attribute.data.atkspeed * (t.target ? t.target._atkSpeedDown : 0) + t.ower.isRageAtkSpeed) }, think: function() { return 1 }, atkDialogue: function() { return 10 } }, this.CDManage.Init(), this.startPos = s.default.MapClr.getMapPos(this.node.position), this.startPosV2 = this.node.position.clone()
    }, h.prototype.newThink = function() { s.default.GScene._GameState != d.GAME_STATE.CountDown && this.currentState != u.StateType.Escape && this.currentState != u.StateType.Treat && this.CDManage.Check("think") && (this.CDManage.Set("think"), NaN != this.node.x && NaN != this.node.y || (this.renounceTarget(), this.node.setPosition(this.startPosV2.x, this.startPosV2.y)), this.checkLife() || (this.target ? this.searchPath() : this.searchRole()), this.checkSkill()) }, h.prototype.checkSkill = function() {
        if (this.currentState == u.StateType.Attack)
            for (var e = this.ower.skillManage.list, t = 0, o = e.length; t < o; t++) {
                var n = e[t],
                    i = this.ower.skillManage.energyList[n];
                if (i && i.cur >= i.all) { this.ower.skillManage.useSkill(n), this.CDManage.Up("atk"); break }
            }
    }, h.prototype.getIsInRoom = function(e) { var t = s.default.MapClr.getMapPos(this.node.position); return !!e.myBed.myTerritoryMap[t.x] && !!e.myBed.myTerritoryMap[t.x][t.y] }, h.prototype.searchRole = function(e) {
        var t = this;
        if (this.target) return this.searchPath();

        function o(e) { t.ower.oldAtkTargetID = t.ower.myAtkTargetID, t.ower.myAtkTargetID = e.roleID, t.target = e, t.searchPath() }
        if (e && 0 < (i = s.default.MapClr.roleList[e])._life) return i.isBeReported = !0, void o(i);
        var n, i, a = [];
        for (n in s.default.MapClr.roleList)(i = s.default.MapClr.roleList[n]).isAi && 0 < i._life && a.push(i);
        e = s.default.GetRandomNum(0, 10) / 10 < .4 || 0 == a.length;
        s.default.data.isInvisible && (e = !1), s.default.data.isTest && s.default.data.isAtkMe && (e = !0), (e = s.default.data.isRealAtkMe ? !0 : e) && 0 < s.default.GScene.player._life ? o(s.default.GScene.player) : o(s.default.GetArrTarge(a)), this._AttackTime = 0
    }, h.prototype.searchPath = function() { var e;!this.target || this.target._life <= 0 ? this.renounceTarget() : (this.attackTarget = this.target.myDoor && this.target.myDoor._isActive && !this.getIsInRoom(this.target) ? this.target.myDoor : this.target, s.default.getDistance(this.node.position, this.attackTarget.node.position) < this._AiParameter.AttackRange || (this.attackTarget.node.position.clone().y += 5, e = s.default.MapClr.getMapPos(this.attackTarget.node.position), this.ower.mySkeleton.timeScale = this._AiParameter.moveSpeed / 160, this.move(e))) }, h.prototype.onMoveEnd = function() { this.ower.mySkeleton.timeScale = 1, this.setAIState(u.StateType.Idle), this.CDManage.Clear("atk") }, h.prototype.checkAttack = function(e) { return !!this.attackTarget && (this.attackTarget.type == p.Element_Type.Role ? !!this.checkPointAttaTarget(e) && void 0 : 30 < this._AttackTime && .3 < this.attackTarget._lifeRatio ? void this.renounceTarget() : s.default.getDistance(this.node.position, this.attackTarget.node.position) < this._AiParameter.AttackRange ? (this.setAtkDialogue(), this.sendAttack(this.attackTarget.node), this._AttackTime += e, !0) : void 0) }, h.prototype.checkPointAttaTarget = function(e) {
        var t = s.default.MapClr.getMapPos(this.node.position),
            o = null === (o = this.target.myBed) || void 0 === o ? void 0 : o.myTerritoryMap;
        if (o && o[t.x] && o[t.x][t.y]) {
            t = o[t.x][t.y].arc;
            if (t && t._isActive && t.node && t.node.isValid && s.default.getDistance(this.node.position, t.node.position) < this._AiParameter.AttackRange) {
                if (this._AttackTime += e, this.CDManage.Check("atk") || this.currentState != u.StateType.Move) return this.setAtkDialogue(), this.sendAttack(t.node), !0;
                this.ower.mySkeleton.timeScale = 1, this.setAIState(u.StateType.Idle)
            }
        }
    }, h.prototype.attackRoleById = function(e) { this.renounceTarget(), this.searchRole(e) }, h.prototype.searchAttackRole = function() { for (var e in s.default.MapClr.roleList) { e = s.default.MapClr.roleList[e]; if (!(e._life <= 0) && s.default.getDistance(this.node.position, e.node.position) <= this._AiParameter.AttackRange) return this.CDManage.Check("atk") && s.default.MapClr.newDialogue(this.node, cc.v2(20, 200), s.default.GetArrTarge(this.DialogueList.kill), 3), this.sendAttack(e.node), !0 } }, h.prototype.sendAttack = function(e) { this.CDManage.Check("atk") && (this.CDManage.Set("atk"), this.ower.mySkeleton.timeScale = 1 / this.CDManage.limt.atk, this.ower.mySkeleton.node.scaleX = this.node.x > e.x ? 1 : -1, this.setAIState(u.StateType.Attack), this.ower.setHurt(e)) }, h.prototype.checkLife = function() { if (this.ower._lifeRatio < .3) return this.node.emit(l.ListenID.Monster_Flee), this.getTreatmentPoint(), !0 }, h.prototype.renounceTarget = function() { this.target = null, this.attackTarget = null, this.ower.mySkeleton.timeScale = 1, this.setAIState(u.StateType.Idle) }, h.prototype.getTreatmentPoint = function() {
        var t = this;
        this.currentState != u.StateType.Escape && (this.renounceTarget(), this.ower.mySkeleton.timeScale = this._AiParameter.moveSpeed / 160, this.move(this.startPos, u.StateType.Escape), this.schedule(this.setTreatment, 1), s.default.MapClr.newDialogue(this.node, cc.v2(20, 200), s.default.GetArrTarge(this.DialogueList[u.StateType.Escape]), 3), this.healEffects || s.default.MapClr.newEffects(this.node.position, "heal", function(e) { e.setParent(t.node), e.setPosition(0, 0), e.zIndex = t.node.zIndex + 1, t.healEffects = e, t.healEffects.active = !1 }))
    }, h.prototype.setTreatment = function() { s.default.getDistance(this.startPosV2, this.node.position) < 200 && (this.healEffects && this.healEffects.isValid && (this.healEffects.active || s.default.MapClr.newDialogue(this.node, cc.v2(20, 200), s.default.GetArrTarge(this.DialogueList[u.StateType.Treat]), 9), this.healEffects.active = !0), this.ower.setLife(new p.HurtData(.1 * this.ower.attribute.data.hp)), .95 < this.ower._lifeRatio && (this.healEffects && (this.healEffects.active = !1), this.unschedule(this.setTreatment), this.ower.mySkeleton.timeScale = 1, this.setAIState(u.StateType.Idle))) }, h.prototype.onDestroy = function() { this.unscheduleAllCallbacks() }, h.prototype.onUplv = function() {}, h.prototype.update = function(e) { s.default.GScene.isPause || this.ower._isActive && (this._time += e, s.default.GScene._GameState == d.GAME_STATE.Game && (this.CDManage.OnUpdate(e), this.newThink(e), this.CDManage.Up("atk"), this.checkAttack(this._time) || this.searchAttackRole(), this._time = 0), this.currentStateClr.OnUpdate(e)) }, h.prototype.setIdleDialogue = function() {
        var e = this.DialogueList[u.StateType.Idle][this.DialogueNum];
        e ? (s.default.MapClr.newDialogue(this.node, cc.v2(20, 200), e, 2.5), this.DialogueNum++) : this.DialogueNum = 0
    }, h.prototype.setAtkDialogue = function() { this.CDManage.Check("atkDialogue") && (this.CDManage.Set("atkDialogue"), s.default.MapClr.newDialogue(this.node, cc.v2(20, 200), s.default.GetArrTarge(this.DialogueList[u.StateType.Attack]), 3)) }, a([e], h));

function h() { var e = null !== r && r.apply(this, arguments) || this; return e.statesList = [], e._AttackTime = 0, e._time = 0, e.DialogueNum = 0, e.DialogueList = {}, e }
o.default = e;
var m, y, g = (y = u.AIStateBase, i(C, y), C.prototype.OnEnter = function() { this._myTarget.setAnimation("sitting1", !0) }, C.prototype.OnUpdate = function() {}, C.prototype.OnExit = function() {}, C),
    _ = (m = u.AIStateBase, i(v, m), v.prototype.OnEnter = function() { this._myTarget.setAnimation("move", !0) }, v.prototype.OnUpdate = function(e) {
        if (0 == this._manager.path.length) return this._manager.setAIState(u.StateType.Treat);
        this.move(e)
    }, v.prototype.OnExit = function() {}, v);

function v() { return null !== m && m.apply(this, arguments) || this }

function C() { return null !== y && y.apply(this, arguments) || this }