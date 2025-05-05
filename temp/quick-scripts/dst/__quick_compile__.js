
(function () {
var scripts = [{"deps":{"./assets/scripts/AINpc":1,"./assets/scripts/AIRole":2,"./assets/scripts/AIMonster":3,"./assets/scripts/AIState":4,"./assets/scripts/AIMinMonster":5,"./assets/scripts/AStar":6,"./assets/scripts/AmTool":7,"./assets/scripts/AnimationCall":8,"./assets/scripts/AISummoned":9,"./assets/scripts/AppCommon":10,"./assets/scripts/AssetLoader":11,"./assets/scripts/AITag":12,"./assets/scripts/BigBossState":13,"./assets/scripts/AutoScaleComponent":14,"./assets/scripts/Bed":15,"./assets/scripts/BaseSdk":16,"./assets/scripts/Battery_M2":17,"./assets/scripts/BigMonster":18,"./assets/scripts/BossTable":19,"./assets/scripts/BannerComponent":20,"./assets/scripts/Battery":21,"./assets/scripts/Building999Cfg":22,"./assets/scripts/BuildingContentItem":23,"./assets/scripts/Building1Cfg":24,"./assets/scripts/CameraController":25,"./assets/scripts/CoinBox":26,"./assets/scripts/Bullet":27,"./assets/scripts/CallID":28,"./assets/scripts/ConstructBase":29,"./assets/scripts/CCTool":30,"./assets/scripts/Cfg":31,"./assets/scripts/CostantCfg":32,"./assets/scripts/ConstructVideoUnlock":33,"./assets/scripts/DeadSign":34,"./assets/scripts/DialogCfg":35,"./assets/scripts/Dialogue":36,"./assets/scripts/Door":37,"./assets/scripts/EggPhone":38,"./assets/scripts/GConfig":39,"./assets/scripts/EggBase":40,"./assets/scripts/GameScene":41,"./assets/scripts/EggPlug":42,"./assets/scripts/FSMBase":43,"./assets/scripts/GameTool":44,"./assets/scripts/GameUI":45,"./assets/scripts/GameElementBut":46,"./assets/scripts/GhostCfg":47,"./assets/scripts/Ghost999Cfg":48,"./assets/scripts/GridViewCell":49,"./assets/scripts/GridViewFreshWork":50,"./assets/scripts/Ghost1Cfg":51,"./assets/scripts/GridView":52,"./assets/scripts/GuideCfg":53,"./assets/scripts/ItemCfg":54,"./assets/scripts/IOSSdk":55,"./assets/scripts/LanguageData":56,"./assets/scripts/LanguageFun":57,"./assets/scripts/JoyStick":58,"./assets/scripts/LayoutObject":59,"./assets/scripts/LanguageNode":60,"./assets/scripts/ListCfg":61,"./assets/scripts/LivingThingBase":62,"./assets/scripts/ElementBase":63,"./assets/scripts/LoaderAdapter":64,"./assets/scripts/LoadIngJs":65,"./assets/scripts/LoadingView":66,"./assets/scripts/Log":67,"./assets/scripts/MainView":68,"./assets/scripts/Manager":69,"./assets/scripts/ManCfg":70,"./assets/scripts/MathUtils":71,"./assets/scripts/MathSection":72,"./assets/scripts/MinMonster":73,"./assets/scripts/MapClr":74,"./assets/scripts/ModeBase":75,"./assets/scripts/ModelStateCheck":76,"./assets/scripts/MinGameSdk":77,"./assets/scripts/Model_2":78,"./assets/scripts/ModelManage":79,"./assets/scripts/Model_3":80,"./assets/scripts/Model_1":81,"./assets/scripts/MoneyUI":82,"./assets/scripts/Notifier":83,"./assets/scripts/Model_4":84,"./assets/scripts/NotifyCaller":85,"./assets/scripts/NotifyListener":86,"./assets/scripts/ListenID":87,"./assets/scripts/NotifyID":88,"./assets/scripts/NoviceTips":89,"./assets/scripts/Npc":90,"./assets/scripts/Produce":91,"./assets/scripts/RandomNameCfg":92,"./assets/scripts/PoolArray":93,"./assets/scripts/PlatformFun":94,"./assets/scripts/ResKeeper":95,"./assets/scripts/ProgressBar":96,"./assets/scripts/PlatformCheckShow":97,"./assets/scripts/Role":98,"./assets/scripts/ResUtil":99,"./assets/scripts/Repair":100,"./assets/scripts/RoleGhostCfg":101,"./assets/scripts/RoleManCfg":102,"./assets/scripts/ShowOffController":103,"./assets/scripts/RoleUIList":104,"./assets/scripts/RuleCfg":105,"./assets/scripts/ShopCfg":106,"./assets/scripts/SkillBuilding":107,"./assets/scripts/SkillManCfg":108,"./assets/scripts/SkillGhostCfg":109,"./assets/scripts/SkillManage":110,"./assets/scripts/SkillRole":111,"./assets/scripts/SkillMonster":112,"./assets/scripts/SkinCtrl":113,"./assets/scripts/SkinItem":114,"./assets/scripts/SkinTypeItem":115,"./assets/scripts/SkinCfg":116,"./assets/scripts/ShopItem":117,"./assets/scripts/Special_Fist":118,"./assets/scripts/Summoned":119,"./assets/scripts/SwitchBtn":120,"./assets/scripts/Summoner":121,"./assets/scripts/TConfig":122,"./assets/scripts/TTGame":123,"./assets/scripts/TaskCtrl":124,"./assets/scripts/TaskCfg":125,"./assets/scripts/TestJs":126,"./assets/scripts/ToastCurrencyItem":127,"./assets/scripts/TwoDHorizontalLayoutObject":128,"./assets/scripts/TouchController":129,"./assets/scripts/TouchMoveCamera":130,"./assets/scripts/TrackItem":131,"./assets/scripts/TwoDLayoutObject":132,"./assets/scripts/WCFormation":133,"./assets/scripts/UserVo":134,"./assets/scripts/WCTool":135,"./assets/scripts/WC_FreshBox":136,"./assets/scripts/WC_Battery":137,"./assets/scripts/WarChessBase":138,"./assets/scripts/WC_Monster":139,"./assets/scripts/Xiaomi_AdrSdk":140,"./assets/scripts/WarChessTouch":141,"./assets/scripts/WarChessManage":142,"./assets/scripts/ZiJia_AdrSdk":143,"./assets/scripts/pop_BuildingCreate":144,"./assets/scripts/pop":145,"./assets/scripts/lzstring":146,"./assets/scripts/pop_GameDie":147,"./assets/scripts/pop_BuildingCreate_Special":148,"./assets/scripts/pop_GameGiftBag":149,"./assets/scripts/pop_LabourPanel":150,"./assets/scripts/pop_BuildingUPLv":151,"./assets/scripts/pop_MatcAM":152,"./assets/scripts/pop_GameWin":153,"./assets/scripts/pop_ReportPanel":154,"./assets/scripts/pop_NoticePanel":155,"./assets/scripts/pop_FriendsTipPanel":156,"./assets/scripts/pop_Matching":157,"./assets/scripts/pop_GamePause":158,"./assets/scripts/pop_ShopPanel":159,"./assets/scripts/pop_RulePanel":160,"./assets/scripts/pop_Setting":161,"./assets/scripts/pop_SkinPanel":162,"./assets/scripts/pop_WxNativeAd":163,"./assets/scripts/wxTs":164,"./assets/scripts/pop_SkinShop":165,"./assets/scripts/AIBuild":166,"./assets/scripts/AIBuild_M2":167},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AINpc.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AIRole.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AIMonster.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AIState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AIMinMonster.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AStar.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AmTool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AnimationCall.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AISummoned.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AppCommon.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AssetLoader.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AITag.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BigBossState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AutoScaleComponent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Bed.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BaseSdk.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Battery_M2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BigMonster.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BossTable.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BannerComponent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Battery.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Building999Cfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BuildingContentItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Building1Cfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CameraController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CoinBox.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Bullet.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CallID.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ConstructBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CCTool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Cfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CostantCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ConstructVideoUnlock.js"},{"deps":{},"path":"preview-scripts/assets/scripts/DeadSign.js"},{"deps":{},"path":"preview-scripts/assets/scripts/DialogCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Dialogue.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Door.js"},{"deps":{},"path":"preview-scripts/assets/scripts/EggPhone.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GConfig.js"},{"deps":{},"path":"preview-scripts/assets/scripts/EggBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/EggPlug.js"},{"deps":{},"path":"preview-scripts/assets/scripts/FSMBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameTool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameElementBut.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GhostCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Ghost999Cfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GridViewCell.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GridViewFreshWork.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Ghost1Cfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GridView.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GuideCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ItemCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/IOSSdk.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LanguageData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LanguageFun.js"},{"deps":{},"path":"preview-scripts/assets/scripts/JoyStick.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LayoutObject.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LanguageNode.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ListCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LivingThingBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ElementBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LoaderAdapter.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LoadIngJs.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LoadingView.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Log.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MainView.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Manager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ManCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MathSection.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MinMonster.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MapClr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ModeBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ModelStateCheck.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MinGameSdk.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Model_2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ModelManage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Model_3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Model_1.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MoneyUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Notifier.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Model_4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NotifyCaller.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NotifyListener.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ListenID.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NotifyID.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NoviceTips.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Npc.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Produce.js"},{"deps":{},"path":"preview-scripts/assets/scripts/RandomNameCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PoolArray.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PlatformFun.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ResKeeper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ProgressBar.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PlatformCheckShow.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Role.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ResUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Repair.js"},{"deps":{},"path":"preview-scripts/assets/scripts/RoleGhostCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/RoleManCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ShowOffController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/RoleUIList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/RuleCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ShopCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkillBuilding.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkillManCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkillGhostCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkillManage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkillRole.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkillMonster.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkinCtrl.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkinItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkinTypeItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkinCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ShopItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Special_Fist.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Summoned.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SwitchBtn.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Summoner.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TConfig.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TTGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TaskCtrl.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TaskCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TestJs.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ToastCurrencyItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TwoDHorizontalLayoutObject.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TouchController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TouchMoveCamera.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TrackItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TwoDLayoutObject.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WCFormation.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UserVo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WCTool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WC_FreshBox.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WC_Battery.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WarChessBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WC_Monster.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Xiaomi_AdrSdk.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WarChessTouch.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WarChessManage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ZiJia_AdrSdk.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_BuildingCreate.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lzstring.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_GameDie.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_BuildingCreate_Special.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_GameGiftBag.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_LabourPanel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_BuildingUPLv.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_MatcAM.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_GameWin.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_ReportPanel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_NoticePanel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_FriendsTipPanel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_Matching.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_GamePause.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_ShopPanel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_RulePanel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_Setting.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_SkinPanel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_WxNativeAd.js"},{"deps":{},"path":"preview-scripts/assets/scripts/wxTs.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop_SkinShop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AIBuild.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AIBuild_M2.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    