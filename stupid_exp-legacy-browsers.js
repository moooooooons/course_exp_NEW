/******************* 
 * Stupid_Exp *
 *******************/


// store info about the experiment session:
let expName = 'stupid_exp';  // from the Builder filename that created this script
let expInfo = {
    'id': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(hiRoutineBegin());
flowScheduler.add(hiRoutineEachFrame());
flowScheduler.add(hiRoutineEnd());
const trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_1LoopBegin(trials_1LoopScheduler));
flowScheduler.add(trials_1LoopScheduler);
flowScheduler.add(trials_1LoopEnd);











flowScheduler.add(TP_instrRoutineBegin());
flowScheduler.add(TP_instrRoutineEachFrame());
flowScheduler.add(TP_instrRoutineEnd());
flowScheduler.add(TP_trialRoutineBegin());
flowScheduler.add(TP_trialRoutineEachFrame());
flowScheduler.add(TP_trialRoutineEnd());
flowScheduler.add(restRoutineBegin());
flowScheduler.add(restRoutineEachFrame());
flowScheduler.add(restRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);












flowScheduler.add(data_collectRoutineBegin());
flowScheduler.add(data_collectRoutineEachFrame());
flowScheduler.add(data_collectRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'cond_instr_1_TEST.xlsx', 'path': 'cond_instr_1_TEST.xlsx'},
    {'name': 'cond_IC_all_TEST.xlsx', 'path': 'cond_IC_all_TEST.xlsx'},
    {'name': 'cond_IC_all_TEST.xlsx', 'path': 'cond_IC_all_TEST.xlsx'},
    {'name': 'cond_instr_2_TEST.xlsx', 'path': 'cond_instr_2_TEST.xlsx'},
    {'name': 'cond_IC_all_TEST.xlsx', 'path': 'cond_IC_all_TEST.xlsx'},
    {'name': 'cond_IC_all_TEST.xlsx', 'path': 'cond_IC_all_TEST.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["id"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var hiClock;
var text_hi;
var kresp_hi;
var IC_instrClock;
var text_IC_instr;
var kresp_IC_instr;
var IC_trainClock;
var text_IC_train_cross;
var text_IC_train_letter;
var kresp_IC_train_answer;
var IC_fbClock;
var msg_IC_fb;
var text_IC_fb;
var IC_train_endClock;
var text_IC_train_end;
var kresp_IC_train_end;
var IC_trialClock;
var text_IC_trial_cross;
var text_IC_trial_letter;
var kresp_IC_trial_answer;
var restClock;
var text_rest;
var kresp_rest;
var TP_instrClock;
var text_TP_instr;
var kresp_TP_instr;
var TP_trialClock;
var text_TP_trial_cross;
var kresp_TP_trial;
var text_TP_trial_end;
var kresp_TP_trial_end;
var TP_IC_instr_1Clock;
var text_TP_IC_instr_1;
var kresp_TP_IC_instr_1;
var TP_IC_instr_2Clock;
var text_TP_IC_instr_2;
var kresp_TP_IC_instr_2;
var TP_IC_trainClock;
var kresp_TP_IC_train_G;
var text_TP_IC_train_cross;
var text_TP_IC_train_letter;
var kresp_TP_IC_train_space;
var TP_IC_fbClock;
var msg_TP_IC_fb;
var text_TP_IC_fb;
var TP_IC_train_endClock;
var text_TP_IC_train_end;
var kresp_TP_IC_train_end;
var TP_IC_trialClock;
var g_t_2;
var key_pressed_2;
var kresp_TP_IC_trial_G;
var text_TP_IC_trial_cross;
var text_TP_IC_trial_letter;
var kresp_TP_IC_trial_space;
var TP_IC_restClock;
var pressed_iris_2;
var text_TP_IC_rest;
var kresp_TP_IC_rest;
var data_collectClock;
var text_data_collect_wait;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "hi"
  hiClock = new util.Clock();
  text_hi = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hi',
    text: 'здравствуйте! спасибо, что согласились поучаствовать в эксперименте. он состоит из 5 частей по 2-3 минуты. в начале каждой части на экране появится инструкция и расскажет, что и как нужно делать\n\nперед тем, как начать, пожалуйста, уберите все устройства, которые показывают время (телефон, смартчасы, будильник, настенные часы и тд), чтобы вы их не видели и не слышали. это очень важно!\n\nесли готовы начать, нажмите стрелку вправо (->)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: 0.0 
  });
  
  kresp_hi = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "IC_instr"
  IC_instrClock = new util.Clock();
  text_IC_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_IC_instr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  kresp_IC_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "IC_train"
  IC_trainClock = new util.Clock();
  text_IC_train_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_IC_train_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_IC_train_letter = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_IC_train_letter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  kresp_IC_train_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "IC_fb"
  IC_fbClock = new util.Clock();
  // Run 'Begin Experiment' code from code_IC_fb
  msg_IC_fb="";
  text_IC_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_IC_fb',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "IC_train_end"
  IC_train_endClock = new util.Clock();
  text_IC_train_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_IC_train_end',
    text: 'ура, тренировка закончена! сейчас у вас была обратная связь (верно/неверно), в основном эксперименте ее не будет\n\nчтобы перейти к эксперименту, нажмите стрелку вправо (->)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: 0.0 
  });
  
  kresp_IC_train_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "IC_trial"
  IC_trialClock = new util.Clock();
  text_IC_trial_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_IC_trial_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_IC_trial_letter = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_IC_trial_letter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  kresp_IC_trial_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  text_rest = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_rest',
    text: 'поздравляю, эта часть позади! можете немного отдохнуть перед следующей частью эксперимента\n\nесли готовы перейти дальше, нажмите стрелку вправо (->)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: 0.0 
  });
  
  kresp_rest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TP_instr"
  TP_instrClock = new util.Clock();
  text_TP_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_instr',
    text: 'в этой части эксперимента вам нужно будет нажимать на клавишу G(П) через каждые 5 секунд: нажали - прошло 5 секунд - снова нажали и тд. нажимать нужно НЕ ВЕДУЩЕЙ рукой (для правши - левой)\n\nпостарайтесь отмерять промежутки между нажатиями как можно точнее. пожалуйста, не используйте часы и другие устройства, полагайтесь на свое внутреннее ощущение времени\n\nпервый раз на G(П) нужно нажать, как только увидите крест в центре экрана. пока выполняете задание, нужно смотреть на этот крест. когда эта часть закончится, на экране появится текст. пока текста нет, продолжайте выполнять задание)))\n\nесли готовы начать, нажмите стрелку вправо (->)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: 0.0 
  });
  
  kresp_TP_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TP_trial"
  TP_trialClock = new util.Clock();
  text_TP_trial_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_trial_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  kresp_TP_trial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_TP_trial_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_trial_end',
    text: 'супер! больше нажимать не нужно\n\nчтобы перейти дальше, нажмите стрелку вправо (->)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -3.0 
  });
  
  kresp_TP_trial_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TP_IC_instr_1"
  TP_IC_instr_1Clock = new util.Clock();
  text_TP_IC_instr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_instr_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  kresp_TP_IC_instr_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TP_IC_instr_2"
  TP_IC_instr_2Clock = new util.Clock();
  text_TP_IC_instr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_instr_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  kresp_TP_IC_instr_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TP_IC_train"
  TP_IC_trainClock = new util.Clock();
  kresp_TP_IC_train_G = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_TP_IC_train_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_train_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_TP_IC_train_letter = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_train_letter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -2.0 
  });
  
  kresp_TP_IC_train_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TP_IC_fb"
  TP_IC_fbClock = new util.Clock();
  // Run 'Begin Experiment' code from code_TP_IC_fb
  msg_TP_IC_fb = "";
  text_TP_IC_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_fb',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "TP_IC_train_end"
  TP_IC_train_endClock = new util.Clock();
  text_TP_IC_train_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_train_end',
    text: 'ура, тренировка закончена! сейчас у вас была обратная связь (верно/неверно), в основном эксперименте ее не будет\n\nчтобы перейти к эксперименту, нажмите стрелку вправо (->)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: 0.0 
  });
  
  kresp_TP_IC_train_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TP_IC_trial"
  TP_IC_trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code_TP_IC_trial_IRI
  g_t_2 = [];
  key_pressed_2 = [];
  kresp_TP_IC_trial_G = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_TP_IC_trial_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_trial_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -2.0 
  });
  
  text_TP_IC_trial_letter = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_trial_letter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -3.0 
  });
  
  kresp_TP_IC_trial_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TP_IC_rest"
  TP_IC_restClock = new util.Clock();
  // Run 'Begin Experiment' code from code_TP_IC_rest
  pressed_iris_2 = [];
  text_TP_IC_rest = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TP_IC_rest',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  kresp_TP_IC_rest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "data_collect"
  data_collectClock = new util.Clock();
  text_data_collect_wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_data_collect_wait',
    text: 'эксперимент закончен, cпасибо за участие!!\n\nподождите, идет запись данных...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var hiMaxDurationReached;
var _kresp_hi_allKeys;
var hiMaxDuration;
var hiComponents;
function hiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hi' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    hiClock.reset();
    routineTimer.reset();
    hiMaxDurationReached = false;
    // update component parameters for each repeat
    kresp_hi.keys = undefined;
    kresp_hi.rt = undefined;
    _kresp_hi_allKeys = [];
    psychoJS.experiment.addData('hi.started', globalClock.getTime());
    hiMaxDuration = null
    // keep track of which components have finished
    hiComponents = [];
    hiComponents.push(text_hi);
    hiComponents.push(kresp_hi);
    
    hiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function hiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hi' ---
    // get current time
    t = hiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_hi* updates
    if (t >= 0.0 && text_hi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_hi.tStart = t;  // (not accounting for frame time here)
      text_hi.frameNStart = frameN;  // exact frame index
      
      text_hi.setAutoDraw(true);
    }
    
    
    // if text_hi is active this frame...
    if (text_hi.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *kresp_hi* updates
    if (t >= 1.0 && kresp_hi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kresp_hi.tStart = t;  // (not accounting for frame time here)
      kresp_hi.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kresp_hi.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kresp_hi.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kresp_hi.clearEvents(); });
    }
    
    // if kresp_hi is active this frame...
    if (kresp_hi.status === PsychoJS.Status.STARTED) {
      let theseKeys = kresp_hi.getKeys({
        keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
        waitRelease: false
      });
      _kresp_hi_allKeys = _kresp_hi_allKeys.concat(theseKeys);
      if (_kresp_hi_allKeys.length > 0) {
        kresp_hi.keys = _kresp_hi_allKeys[_kresp_hi_allKeys.length - 1].name;  // just the last key pressed
        kresp_hi.rt = _kresp_hi_allKeys[_kresp_hi_allKeys.length - 1].rt;
        kresp_hi.duration = _kresp_hi_allKeys[_kresp_hi_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    hiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function hiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hi' ---
    hiComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('hi.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(kresp_hi.corr, level);
    }
    psychoJS.experiment.addData('kresp_hi.keys', kresp_hi.keys);
    if (typeof kresp_hi.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('kresp_hi.rt', kresp_hi.rt);
        psychoJS.experiment.addData('kresp_hi.duration', kresp_hi.duration);
        routineTimer.reset();
        }
    
    kresp_hi.stop();
    // the Routine "hi" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_1;
function trials_1LoopBegin(trials_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond_instr_1_TEST.xlsx',
      seed: undefined, name: 'trials_1'
    });
    psychoJS.experiment.addLoop(trials_1); // add the loop to the experiment
    currentLoop = trials_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_1.forEach(function() {
      snapshot = trials_1.getSnapshot();
    
      trials_1LoopScheduler.add(importConditions(snapshot));
      trials_1LoopScheduler.add(IC_instrRoutineBegin(snapshot));
      trials_1LoopScheduler.add(IC_instrRoutineEachFrame());
      trials_1LoopScheduler.add(IC_instrRoutineEnd(snapshot));
      const IC_trainsLoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(IC_trainsLoopBegin(IC_trainsLoopScheduler, snapshot));
      trials_1LoopScheduler.add(IC_trainsLoopScheduler);
      trials_1LoopScheduler.add(IC_trainsLoopEnd);
      trials_1LoopScheduler.add(IC_train_endRoutineBegin(snapshot));
      trials_1LoopScheduler.add(IC_train_endRoutineEachFrame());
      trials_1LoopScheduler.add(IC_train_endRoutineEnd(snapshot));
      const IC_trialsLoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(IC_trialsLoopBegin(IC_trialsLoopScheduler, snapshot));
      trials_1LoopScheduler.add(IC_trialsLoopScheduler);
      trials_1LoopScheduler.add(IC_trialsLoopEnd);
      trials_1LoopScheduler.add(restRoutineBegin(snapshot));
      trials_1LoopScheduler.add(restRoutineEachFrame());
      trials_1LoopScheduler.add(restRoutineEnd(snapshot));
      trials_1LoopScheduler.add(trials_1LoopEndIteration(trials_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var IC_trains;
function IC_trainsLoopBegin(IC_trainsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    IC_trains = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'cond_IC_all_TEST.xlsx', train_rows),
      seed: undefined, name: 'IC_trains'
    });
    psychoJS.experiment.addLoop(IC_trains); // add the loop to the experiment
    currentLoop = IC_trains;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    IC_trains.forEach(function() {
      snapshot = IC_trains.getSnapshot();
    
      IC_trainsLoopScheduler.add(importConditions(snapshot));
      IC_trainsLoopScheduler.add(IC_trainRoutineBegin(snapshot));
      IC_trainsLoopScheduler.add(IC_trainRoutineEachFrame());
      IC_trainsLoopScheduler.add(IC_trainRoutineEnd(snapshot));
      IC_trainsLoopScheduler.add(IC_fbRoutineBegin(snapshot));
      IC_trainsLoopScheduler.add(IC_fbRoutineEachFrame());
      IC_trainsLoopScheduler.add(IC_fbRoutineEnd(snapshot));
      IC_trainsLoopScheduler.add(IC_trainsLoopEndIteration(IC_trainsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function IC_trainsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(IC_trains);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function IC_trainsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var IC_trials;
function IC_trialsLoopBegin(IC_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    IC_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'cond_IC_all_TEST.xlsx', trial_rows),
      seed: undefined, name: 'IC_trials'
    });
    psychoJS.experiment.addLoop(IC_trials); // add the loop to the experiment
    currentLoop = IC_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    IC_trials.forEach(function() {
      snapshot = IC_trials.getSnapshot();
    
      IC_trialsLoopScheduler.add(importConditions(snapshot));
      IC_trialsLoopScheduler.add(IC_trialRoutineBegin(snapshot));
      IC_trialsLoopScheduler.add(IC_trialRoutineEachFrame());
      IC_trialsLoopScheduler.add(IC_trialRoutineEnd(snapshot));
      IC_trialsLoopScheduler.add(IC_trialsLoopEndIteration(IC_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function IC_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(IC_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function IC_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond_instr_2_TEST.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(TP_IC_instr_1RoutineBegin(snapshot));
      trials_2LoopScheduler.add(TP_IC_instr_1RoutineEachFrame());
      trials_2LoopScheduler.add(TP_IC_instr_1RoutineEnd(snapshot));
      trials_2LoopScheduler.add(TP_IC_instr_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(TP_IC_instr_2RoutineEachFrame());
      trials_2LoopScheduler.add(TP_IC_instr_2RoutineEnd(snapshot));
      const TP_IC_trainsLoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(TP_IC_trainsLoopBegin(TP_IC_trainsLoopScheduler, snapshot));
      trials_2LoopScheduler.add(TP_IC_trainsLoopScheduler);
      trials_2LoopScheduler.add(TP_IC_trainsLoopEnd);
      trials_2LoopScheduler.add(TP_IC_train_endRoutineBegin(snapshot));
      trials_2LoopScheduler.add(TP_IC_train_endRoutineEachFrame());
      trials_2LoopScheduler.add(TP_IC_train_endRoutineEnd(snapshot));
      const TP_IC_trialsLoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(TP_IC_trialsLoopBegin(TP_IC_trialsLoopScheduler, snapshot));
      trials_2LoopScheduler.add(TP_IC_trialsLoopScheduler);
      trials_2LoopScheduler.add(TP_IC_trialsLoopEnd);
      trials_2LoopScheduler.add(TP_IC_restRoutineBegin(snapshot));
      trials_2LoopScheduler.add(TP_IC_restRoutineEachFrame());
      trials_2LoopScheduler.add(TP_IC_restRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var TP_IC_trains;
function TP_IC_trainsLoopBegin(TP_IC_trainsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TP_IC_trains = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'cond_IC_all_TEST.xlsx', train_rows),
      seed: undefined, name: 'TP_IC_trains'
    });
    psychoJS.experiment.addLoop(TP_IC_trains); // add the loop to the experiment
    currentLoop = TP_IC_trains;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    TP_IC_trains.forEach(function() {
      snapshot = TP_IC_trains.getSnapshot();
    
      TP_IC_trainsLoopScheduler.add(importConditions(snapshot));
      TP_IC_trainsLoopScheduler.add(TP_IC_trainRoutineBegin(snapshot));
      TP_IC_trainsLoopScheduler.add(TP_IC_trainRoutineEachFrame());
      TP_IC_trainsLoopScheduler.add(TP_IC_trainRoutineEnd(snapshot));
      TP_IC_trainsLoopScheduler.add(TP_IC_fbRoutineBegin(snapshot));
      TP_IC_trainsLoopScheduler.add(TP_IC_fbRoutineEachFrame());
      TP_IC_trainsLoopScheduler.add(TP_IC_fbRoutineEnd(snapshot));
      TP_IC_trainsLoopScheduler.add(TP_IC_trainsLoopEndIteration(TP_IC_trainsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function TP_IC_trainsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TP_IC_trains);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TP_IC_trainsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var TP_IC_trials;
function TP_IC_trialsLoopBegin(TP_IC_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TP_IC_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'cond_IC_all_TEST.xlsx', trial_rows),
      seed: undefined, name: 'TP_IC_trials'
    });
    psychoJS.experiment.addLoop(TP_IC_trials); // add the loop to the experiment
    currentLoop = TP_IC_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    TP_IC_trials.forEach(function() {
      snapshot = TP_IC_trials.getSnapshot();
    
      TP_IC_trialsLoopScheduler.add(importConditions(snapshot));
      TP_IC_trialsLoopScheduler.add(TP_IC_trialRoutineBegin(snapshot));
      TP_IC_trialsLoopScheduler.add(TP_IC_trialRoutineEachFrame());
      TP_IC_trialsLoopScheduler.add(TP_IC_trialRoutineEnd(snapshot));
      TP_IC_trialsLoopScheduler.add(TP_IC_trialsLoopEndIteration(TP_IC_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function TP_IC_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TP_IC_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TP_IC_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var IC_instrMaxDurationReached;
var msg_IC_instr;
var _kresp_IC_instr_allKeys;
var IC_instrMaxDuration;
var IC_instrComponents;
function IC_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'IC_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    IC_instrClock.reset();
    routineTimer.reset();
    IC_instrMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_IC_instr
    msg_IC_instr = `в этой части эксперимента на экране друг за другом будут быстро появляться буквы ${nogo_letter} и ${go_letter} в случайном порядке. в перерывах между ними нужно смотреть на крест в центре экрана
    
    если появится ${nogo_letter}, нужно как можно быстрее нажать на ПРОБЕЛ. если ${go_letter} - ничего делать не нужно
    
    нажимайте на пробел ВЕДУЩЕЙ рукой (которой пишете). старайтесь отвечать как можно быстрее и при этом не совершать ошибок
    
    сначала будет небольшая тренировка с обратной связью (верно/неверно). чтобы перейти к ней, нажмите стрелку вправо (->)`
    ;
    
    text_IC_instr.setText(msg_IC_instr);
    kresp_IC_instr.keys = undefined;
    kresp_IC_instr.rt = undefined;
    _kresp_IC_instr_allKeys = [];
    psychoJS.experiment.addData('IC_instr.started', globalClock.getTime());
    IC_instrMaxDuration = null
    // keep track of which components have finished
    IC_instrComponents = [];
    IC_instrComponents.push(text_IC_instr);
    IC_instrComponents.push(kresp_IC_instr);
    
    IC_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IC_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'IC_instr' ---
    // get current time
    t = IC_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_IC_instr* updates
    if (t >= 0.0 && text_IC_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_IC_instr.tStart = t;  // (not accounting for frame time here)
      text_IC_instr.frameNStart = frameN;  // exact frame index
      
      text_IC_instr.setAutoDraw(true);
    }
    
    
    // if text_IC_instr is active this frame...
    if (text_IC_instr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *kresp_IC_instr* updates
    if (t >= 1.0 && kresp_IC_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kresp_IC_instr.tStart = t;  // (not accounting for frame time here)
      kresp_IC_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kresp_IC_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kresp_IC_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kresp_IC_instr.clearEvents(); });
    }
    
    // if kresp_IC_instr is active this frame...
    if (kresp_IC_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = kresp_IC_instr.getKeys({
        keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
        waitRelease: false
      });
      _kresp_IC_instr_allKeys = _kresp_IC_instr_allKeys.concat(theseKeys);
      if (_kresp_IC_instr_allKeys.length > 0) {
        kresp_IC_instr.keys = _kresp_IC_instr_allKeys[_kresp_IC_instr_allKeys.length - 1].name;  // just the last key pressed
        kresp_IC_instr.rt = _kresp_IC_instr_allKeys[_kresp_IC_instr_allKeys.length - 1].rt;
        kresp_IC_instr.duration = _kresp_IC_instr_allKeys[_kresp_IC_instr_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IC_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IC_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'IC_instr' ---
    IC_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('IC_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(kresp_IC_instr.corr, level);
    }
    psychoJS.experiment.addData('kresp_IC_instr.keys', kresp_IC_instr.keys);
    if (typeof kresp_IC_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('kresp_IC_instr.rt', kresp_IC_instr.rt);
        psychoJS.experiment.addData('kresp_IC_instr.duration', kresp_IC_instr.duration);
        routineTimer.reset();
        }
    
    kresp_IC_instr.stop();
    // the Routine "IC_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var IC_trainMaxDurationReached;
var _kresp_IC_train_answer_allKeys;
var IC_trainMaxDuration;
var IC_trainComponents;
function IC_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'IC_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    IC_trainClock.reset(routineTimer.getTime());
    routineTimer.add(1.100000);
    IC_trainMaxDurationReached = false;
    // update component parameters for each repeat
    text_IC_train_letter.setText(letter);
    kresp_IC_train_answer.keys = undefined;
    kresp_IC_train_answer.rt = undefined;
    _kresp_IC_train_answer_allKeys = [];
    psychoJS.experiment.addData('IC_train.started', globalClock.getTime());
    IC_trainMaxDuration = null
    // keep track of which components have finished
    IC_trainComponents = [];
    IC_trainComponents.push(text_IC_train_cross);
    IC_trainComponents.push(text_IC_train_letter);
    IC_trainComponents.push(kresp_IC_train_answer);
    
    IC_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function IC_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'IC_train' ---
    // get current time
    t = IC_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_IC_train_cross* updates
    if (t >= 0.0 && text_IC_train_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_IC_train_cross.tStart = t;  // (not accounting for frame time here)
      text_IC_train_cross.frameNStart = frameN;  // exact frame index
      
      text_IC_train_cross.setAutoDraw(true);
    }
    
    
    // if text_IC_train_cross is active this frame...
    if (text_IC_train_cross.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_IC_train_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_IC_train_cross.tStop = t;  // not accounting for scr refresh
      text_IC_train_cross.frameNStop = frameN;  // exact frame index
      // update status
      text_IC_train_cross.status = PsychoJS.Status.FINISHED;
      text_IC_train_cross.setAutoDraw(false);
    }
    
    
    // *text_IC_train_letter* updates
    if (t >= 0.25 && text_IC_train_letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_IC_train_letter.tStart = t;  // (not accounting for frame time here)
      text_IC_train_letter.frameNStart = frameN;  // exact frame index
      
      text_IC_train_letter.setAutoDraw(true);
    }
    
    
    // if text_IC_train_letter is active this frame...
    if (text_IC_train_letter.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_IC_train_letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_IC_train_letter.tStop = t;  // not accounting for scr refresh
      text_IC_train_letter.frameNStop = frameN;  // exact frame index
      // update status
      text_IC_train_letter.status = PsychoJS.Status.FINISHED;
      text_IC_train_letter.setAutoDraw(false);
    }
    
    
    // *kresp_IC_train_answer* updates
    if (t >= 0.25 && kresp_IC_train_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kresp_IC_train_answer.tStart = t;  // (not accounting for frame time here)
      kresp_IC_train_answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kresp_IC_train_answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kresp_IC_train_answer.start(); }); // start on screen flip
    }
    frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (kresp_IC_train_answer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      kresp_IC_train_answer.tStop = t;  // not accounting for scr refresh
      kresp_IC_train_answer.frameNStop = frameN;  // exact frame index
      // update status
      kresp_IC_train_answer.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (kresp_IC_train_answer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        kresp_IC_train_answer.tStop = t;  // not accounting for scr refresh
        kresp_IC_train_answer.frameNStop = frameN;  // exact frame index
        // update status
        kresp_IC_train_answer.status = PsychoJS.Status.FINISHED;
        kresp_IC_train_answer.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if kresp_IC_train_answer is active this frame...
      if (kresp_IC_train_answer.status === PsychoJS.Status.STARTED) {
        let theseKeys = kresp_IC_train_answer.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _kresp_IC_train_answer_allKeys = _kresp_IC_train_answer_allKeys.concat(theseKeys);
        if (_kresp_IC_train_answer_allKeys.length > 0) {
          kresp_IC_train_answer.keys = _kresp_IC_train_answer_allKeys[_kresp_IC_train_answer_allKeys.length - 1].name;  // just the last key pressed
          kresp_IC_train_answer.rt = _kresp_IC_train_answer_allKeys[_kresp_IC_train_answer_allKeys.length - 1].rt;
          kresp_IC_train_answer.duration = _kresp_IC_train_answer_allKeys[_kresp_IC_train_answer_allKeys.length - 1].duration;
          // was this correct?
          if (kresp_IC_train_answer.keys == corr_answer) {
              kresp_IC_train_answer.corr = 1;
          } else {
              kresp_IC_train_answer.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      IC_trainComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function IC_trainRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'IC_train' ---
      IC_trainComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('IC_train.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (kresp_IC_train_answer.keys === undefined) {
        if (['None','none',undefined].includes(corr_answer)) {
           kresp_IC_train_answer.corr = 1;  // correct non-response
        } else {
           kresp_IC_train_answer.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(kresp_IC_train_answer.corr, level);
      }
      psychoJS.experiment.addData('kresp_IC_train_answer.keys', kresp_IC_train_answer.keys);
      psychoJS.experiment.addData('kresp_IC_train_answer.corr', kresp_IC_train_answer.corr);
      if (typeof kresp_IC_train_answer.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('kresp_IC_train_answer.rt', kresp_IC_train_answer.rt);
          psychoJS.experiment.addData('kresp_IC_train_answer.duration', kresp_IC_train_answer.duration);
          routineTimer.reset();
          }
      
      kresp_IC_train_answer.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (IC_trainMaxDurationReached) {
          IC_trainClock.add(IC_trainMaxDuration);
      } else {
          IC_trainClock.add(1.100000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var IC_fbMaxDurationReached;
var IC_fbMaxDuration;
var IC_fbComponents;
function IC_fbRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'IC_fb' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      IC_fbClock.reset(routineTimer.getTime());
      routineTimer.add(1.500000);
      IC_fbMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_IC_fb
      if (letter === go_letter) {
          if (!kresp_IC_train_answer.keys || kresp_IC_train_answer.keys.length === 0) {
              msg_IC_fb = "верно!";
          } else if (kresp_IC_train_answer.keys === "space") {
              msg_IC_fb = `неверно, пробел нужно нажимать после ${nogo_letter}`;
          }
      } else {
          if (!kresp_IC_train_answer.keys || kresp_IC_train_answer.keys.length === 0) {
              msg_IC_fb = `неверно, после ${nogo_letter} нужно нажать пробел`;
          } else if (kresp_IC_train_answer.keys === "space") {
              msg_IC_fb = "верно!";
          }
      }
      text_IC_fb.setText(msg_IC_fb);
      psychoJS.experiment.addData('IC_fb.started', globalClock.getTime());
      IC_fbMaxDuration = null
      // keep track of which components have finished
      IC_fbComponents = [];
      IC_fbComponents.push(text_IC_fb);
      
      IC_fbComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function IC_fbRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'IC_fb' ---
      // get current time
      t = IC_fbClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_IC_fb* updates
      if (t >= 0.0 && text_IC_fb.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_IC_fb.tStart = t;  // (not accounting for frame time here)
        text_IC_fb.frameNStart = frameN;  // exact frame index
        
        text_IC_fb.setAutoDraw(true);
      }
      
      
      // if text_IC_fb is active this frame...
      if (text_IC_fb.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_IC_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_IC_fb.tStop = t;  // not accounting for scr refresh
        text_IC_fb.frameNStop = frameN;  // exact frame index
        // update status
        text_IC_fb.status = PsychoJS.Status.FINISHED;
        text_IC_fb.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      IC_fbComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function IC_fbRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'IC_fb' ---
      IC_fbComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('IC_fb.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_IC_fb
      msg_IC_fb = "";
      psychoJS.eventManager.clearEvents();
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (IC_fbMaxDurationReached) {
          IC_fbClock.add(IC_fbMaxDuration);
      } else {
          IC_fbClock.add(1.500000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var IC_train_endMaxDurationReached;
var _kresp_IC_train_end_allKeys;
var IC_train_endMaxDuration;
var IC_train_endComponents;
function IC_train_endRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'IC_train_end' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      IC_train_endClock.reset();
      routineTimer.reset();
      IC_train_endMaxDurationReached = false;
      // update component parameters for each repeat
      kresp_IC_train_end.keys = undefined;
      kresp_IC_train_end.rt = undefined;
      _kresp_IC_train_end_allKeys = [];
      psychoJS.experiment.addData('IC_train_end.started', globalClock.getTime());
      IC_train_endMaxDuration = null
      // keep track of which components have finished
      IC_train_endComponents = [];
      IC_train_endComponents.push(text_IC_train_end);
      IC_train_endComponents.push(kresp_IC_train_end);
      
      IC_train_endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function IC_train_endRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'IC_train_end' ---
      // get current time
      t = IC_train_endClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_IC_train_end* updates
      if (t >= 0.0 && text_IC_train_end.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_IC_train_end.tStart = t;  // (not accounting for frame time here)
        text_IC_train_end.frameNStart = frameN;  // exact frame index
        
        text_IC_train_end.setAutoDraw(true);
      }
      
      
      // if text_IC_train_end is active this frame...
      if (text_IC_train_end.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *kresp_IC_train_end* updates
      if (t >= 1.0 && kresp_IC_train_end.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        kresp_IC_train_end.tStart = t;  // (not accounting for frame time here)
        kresp_IC_train_end.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { kresp_IC_train_end.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { kresp_IC_train_end.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { kresp_IC_train_end.clearEvents(); });
      }
      
      // if kresp_IC_train_end is active this frame...
      if (kresp_IC_train_end.status === PsychoJS.Status.STARTED) {
        let theseKeys = kresp_IC_train_end.getKeys({
          keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
          waitRelease: false
        });
        _kresp_IC_train_end_allKeys = _kresp_IC_train_end_allKeys.concat(theseKeys);
        if (_kresp_IC_train_end_allKeys.length > 0) {
          kresp_IC_train_end.keys = _kresp_IC_train_end_allKeys[_kresp_IC_train_end_allKeys.length - 1].name;  // just the last key pressed
          kresp_IC_train_end.rt = _kresp_IC_train_end_allKeys[_kresp_IC_train_end_allKeys.length - 1].rt;
          kresp_IC_train_end.duration = _kresp_IC_train_end_allKeys[_kresp_IC_train_end_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      IC_train_endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function IC_train_endRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'IC_train_end' ---
      IC_train_endComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('IC_train_end.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(kresp_IC_train_end.corr, level);
      }
      psychoJS.experiment.addData('kresp_IC_train_end.keys', kresp_IC_train_end.keys);
      if (typeof kresp_IC_train_end.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('kresp_IC_train_end.rt', kresp_IC_train_end.rt);
          psychoJS.experiment.addData('kresp_IC_train_end.duration', kresp_IC_train_end.duration);
          routineTimer.reset();
          }
      
      kresp_IC_train_end.stop();
      // the Routine "IC_train_end" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var IC_trialMaxDurationReached;
var _kresp_IC_trial_answer_allKeys;
var IC_trialMaxDuration;
var IC_trialComponents;
function IC_trialRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'IC_trial' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      IC_trialClock.reset(routineTimer.getTime());
      routineTimer.add(1.100000);
      IC_trialMaxDurationReached = false;
      // update component parameters for each repeat
      text_IC_trial_letter.setText(letter);
      kresp_IC_trial_answer.keys = undefined;
      kresp_IC_trial_answer.rt = undefined;
      _kresp_IC_trial_answer_allKeys = [];
      psychoJS.experiment.addData('IC_trial.started', globalClock.getTime());
      IC_trialMaxDuration = null
      // keep track of which components have finished
      IC_trialComponents = [];
      IC_trialComponents.push(text_IC_trial_cross);
      IC_trialComponents.push(text_IC_trial_letter);
      IC_trialComponents.push(kresp_IC_trial_answer);
      
      IC_trialComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function IC_trialRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'IC_trial' ---
      // get current time
      t = IC_trialClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_IC_trial_cross* updates
      if (t >= 0.0 && text_IC_trial_cross.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_IC_trial_cross.tStart = t;  // (not accounting for frame time here)
        text_IC_trial_cross.frameNStart = frameN;  // exact frame index
        
        text_IC_trial_cross.setAutoDraw(true);
      }
      
      
      // if text_IC_trial_cross is active this frame...
      if (text_IC_trial_cross.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_IC_trial_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_IC_trial_cross.tStop = t;  // not accounting for scr refresh
        text_IC_trial_cross.frameNStop = frameN;  // exact frame index
        // update status
        text_IC_trial_cross.status = PsychoJS.Status.FINISHED;
        text_IC_trial_cross.setAutoDraw(false);
      }
      
      
      // *text_IC_trial_letter* updates
      if (t >= 0.25 && text_IC_trial_letter.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_IC_trial_letter.tStart = t;  // (not accounting for frame time here)
        text_IC_trial_letter.frameNStart = frameN;  // exact frame index
        
        text_IC_trial_letter.setAutoDraw(true);
      }
      
      
      // if text_IC_trial_letter is active this frame...
      if (text_IC_trial_letter.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_IC_trial_letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_IC_trial_letter.tStop = t;  // not accounting for scr refresh
        text_IC_trial_letter.frameNStop = frameN;  // exact frame index
        // update status
        text_IC_trial_letter.status = PsychoJS.Status.FINISHED;
        text_IC_trial_letter.setAutoDraw(false);
      }
      
      
      // *kresp_IC_trial_answer* updates
      if (t >= 0.25 && kresp_IC_trial_answer.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        kresp_IC_trial_answer.tStart = t;  // (not accounting for frame time here)
        kresp_IC_trial_answer.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { kresp_IC_trial_answer.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { kresp_IC_trial_answer.start(); }); // start on screen flip
      }
      frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (kresp_IC_trial_answer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        kresp_IC_trial_answer.tStop = t;  // not accounting for scr refresh
        kresp_IC_trial_answer.frameNStop = frameN;  // exact frame index
        // update status
        kresp_IC_trial_answer.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (kresp_IC_trial_answer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          kresp_IC_trial_answer.tStop = t;  // not accounting for scr refresh
          kresp_IC_trial_answer.frameNStop = frameN;  // exact frame index
          // update status
          kresp_IC_trial_answer.status = PsychoJS.Status.FINISHED;
          kresp_IC_trial_answer.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if kresp_IC_trial_answer is active this frame...
        if (kresp_IC_trial_answer.status === PsychoJS.Status.STARTED) {
          let theseKeys = kresp_IC_trial_answer.getKeys({
            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
            waitRelease: false
          });
          _kresp_IC_trial_answer_allKeys = _kresp_IC_trial_answer_allKeys.concat(theseKeys);
          if (_kresp_IC_trial_answer_allKeys.length > 0) {
            kresp_IC_trial_answer.keys = _kresp_IC_trial_answer_allKeys[_kresp_IC_trial_answer_allKeys.length - 1].name;  // just the last key pressed
            kresp_IC_trial_answer.rt = _kresp_IC_trial_answer_allKeys[_kresp_IC_trial_answer_allKeys.length - 1].rt;
            kresp_IC_trial_answer.duration = _kresp_IC_trial_answer_allKeys[_kresp_IC_trial_answer_allKeys.length - 1].duration;
            // was this correct?
            if (kresp_IC_trial_answer.keys == corr_answer) {
                kresp_IC_trial_answer.corr = 1;
            } else {
                kresp_IC_trial_answer.corr = 0;
            }
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        IC_trialComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function IC_trialRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'IC_trial' ---
        IC_trialComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('IC_trial.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (kresp_IC_trial_answer.keys === undefined) {
          if (['None','none',undefined].includes(corr_answer)) {
             kresp_IC_trial_answer.corr = 1;  // correct non-response
          } else {
             kresp_IC_trial_answer.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(kresp_IC_trial_answer.corr, level);
        }
        psychoJS.experiment.addData('kresp_IC_trial_answer.keys', kresp_IC_trial_answer.keys);
        psychoJS.experiment.addData('kresp_IC_trial_answer.corr', kresp_IC_trial_answer.corr);
        if (typeof kresp_IC_trial_answer.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('kresp_IC_trial_answer.rt', kresp_IC_trial_answer.rt);
            psychoJS.experiment.addData('kresp_IC_trial_answer.duration', kresp_IC_trial_answer.duration);
            routineTimer.reset();
            }
        
        kresp_IC_trial_answer.stop();
        if (routineForceEnded) {
            routineTimer.reset();} else if (IC_trialMaxDurationReached) {
            IC_trialClock.add(IC_trialMaxDuration);
        } else {
            IC_trialClock.add(1.100000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var restMaxDurationReached;
var _kresp_rest_allKeys;
var restMaxDuration;
var restComponents;
function restRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'rest' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        restClock.reset();
        routineTimer.reset();
        restMaxDurationReached = false;
        // update component parameters for each repeat
        kresp_rest.keys = undefined;
        kresp_rest.rt = undefined;
        _kresp_rest_allKeys = [];
        psychoJS.experiment.addData('rest.started', globalClock.getTime());
        restMaxDuration = null
        // keep track of which components have finished
        restComponents = [];
        restComponents.push(text_rest);
        restComponents.push(kresp_rest);
        
        restComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function restRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'rest' ---
        // get current time
        t = restClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_rest* updates
        if (t >= 0.0 && text_rest.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_rest.tStart = t;  // (not accounting for frame time here)
          text_rest.frameNStart = frameN;  // exact frame index
          
          text_rest.setAutoDraw(true);
        }
        
        
        // if text_rest is active this frame...
        if (text_rest.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *kresp_rest* updates
        if (t >= 1.0 && kresp_rest.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          kresp_rest.tStart = t;  // (not accounting for frame time here)
          kresp_rest.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { kresp_rest.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { kresp_rest.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { kresp_rest.clearEvents(); });
        }
        
        // if kresp_rest is active this frame...
        if (kresp_rest.status === PsychoJS.Status.STARTED) {
          let theseKeys = kresp_rest.getKeys({
            keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
            waitRelease: false
          });
          _kresp_rest_allKeys = _kresp_rest_allKeys.concat(theseKeys);
          if (_kresp_rest_allKeys.length > 0) {
            kresp_rest.keys = _kresp_rest_allKeys[_kresp_rest_allKeys.length - 1].name;  // just the last key pressed
            kresp_rest.rt = _kresp_rest_allKeys[_kresp_rest_allKeys.length - 1].rt;
            kresp_rest.duration = _kresp_rest_allKeys[_kresp_rest_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        restComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function restRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'rest' ---
        restComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(kresp_rest.corr, level);
        }
        psychoJS.experiment.addData('kresp_rest.keys', kresp_rest.keys);
        if (typeof kresp_rest.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('kresp_rest.rt', kresp_rest.rt);
            psychoJS.experiment.addData('kresp_rest.duration', kresp_rest.duration);
            routineTimer.reset();
            }
        
        kresp_rest.stop();
        // the Routine "rest" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var TP_instrMaxDurationReached;
var _kresp_TP_instr_allKeys;
var TP_instrMaxDuration;
var TP_instrComponents;
function TP_instrRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'TP_instr' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        TP_instrClock.reset();
        routineTimer.reset();
        TP_instrMaxDurationReached = false;
        // update component parameters for each repeat
        kresp_TP_instr.keys = undefined;
        kresp_TP_instr.rt = undefined;
        _kresp_TP_instr_allKeys = [];
        psychoJS.experiment.addData('TP_instr.started', globalClock.getTime());
        TP_instrMaxDuration = null
        // keep track of which components have finished
        TP_instrComponents = [];
        TP_instrComponents.push(text_TP_instr);
        TP_instrComponents.push(kresp_TP_instr);
        
        TP_instrComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function TP_instrRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'TP_instr' ---
        // get current time
        t = TP_instrClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_TP_instr* updates
        if (t >= 0.0 && text_TP_instr.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_TP_instr.tStart = t;  // (not accounting for frame time here)
          text_TP_instr.frameNStart = frameN;  // exact frame index
          
          text_TP_instr.setAutoDraw(true);
        }
        
        
        // if text_TP_instr is active this frame...
        if (text_TP_instr.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *kresp_TP_instr* updates
        if (t >= 1.0 && kresp_TP_instr.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          kresp_TP_instr.tStart = t;  // (not accounting for frame time here)
          kresp_TP_instr.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { kresp_TP_instr.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_instr.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_instr.clearEvents(); });
        }
        
        // if kresp_TP_instr is active this frame...
        if (kresp_TP_instr.status === PsychoJS.Status.STARTED) {
          let theseKeys = kresp_TP_instr.getKeys({
            keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
            waitRelease: false
          });
          _kresp_TP_instr_allKeys = _kresp_TP_instr_allKeys.concat(theseKeys);
          if (_kresp_TP_instr_allKeys.length > 0) {
            kresp_TP_instr.keys = _kresp_TP_instr_allKeys[_kresp_TP_instr_allKeys.length - 1].name;  // just the last key pressed
            kresp_TP_instr.rt = _kresp_TP_instr_allKeys[_kresp_TP_instr_allKeys.length - 1].rt;
            kresp_TP_instr.duration = _kresp_TP_instr_allKeys[_kresp_TP_instr_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        TP_instrComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function TP_instrRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'TP_instr' ---
        TP_instrComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('TP_instr.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(kresp_TP_instr.corr, level);
        }
        psychoJS.experiment.addData('kresp_TP_instr.keys', kresp_TP_instr.keys);
        if (typeof kresp_TP_instr.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('kresp_TP_instr.rt', kresp_TP_instr.rt);
            psychoJS.experiment.addData('kresp_TP_instr.duration', kresp_TP_instr.duration);
            routineTimer.reset();
            }
        
        kresp_TP_instr.stop();
        // the Routine "TP_instr" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var TP_trialMaxDurationReached;
var g_t_1;
var pressed_iris_1;
var key_pressed_1;
var _kresp_TP_trial_allKeys;
var _kresp_TP_trial_end_allKeys;
var TP_trialMaxDuration;
var TP_trialComponents;
function TP_trialRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'TP_trial' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        TP_trialClock.reset();
        routineTimer.reset();
        TP_trialMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_TP_trial_IRI
        g_t_1 = [];
        pressed_iris_1 = [];
        key_pressed_1 = [];
        kresp_TP_trial.keys = undefined;
        kresp_TP_trial.rt = undefined;
        _kresp_TP_trial_allKeys = [];
        kresp_TP_trial_end.keys = undefined;
        kresp_TP_trial_end.rt = undefined;
        _kresp_TP_trial_end_allKeys = [];
        psychoJS.experiment.addData('TP_trial.started', globalClock.getTime());
        TP_trialMaxDuration = null
        // keep track of which components have finished
        TP_trialComponents = [];
        TP_trialComponents.push(text_TP_trial_cross);
        TP_trialComponents.push(kresp_TP_trial);
        TP_trialComponents.push(text_TP_trial_end);
        TP_trialComponents.push(kresp_TP_trial_end);
        
        TP_trialComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function TP_trialRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'TP_trial' ---
        // get current time
        t = TP_trialClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // Run 'Each Frame' code from code_TP_trial_IRI
        let keysWithTime_1 = psychoJS.eventManager.getKeys({timeStamped: true});
        
        for (let i = 0; i < keysWithTime_1.length; i++) {
            let keyName = keysWithTime_1[i][0];
            let keyTime = keysWithTime_1[i][1];
            key_pressed_1.push(keyName);
            if (keyName === 'g' || keyName === 'G'|| keyName === 'п'|| keyName === 'П') {
                g_t_1.push(keyTime);
            } 
        }
        
        // *text_TP_trial_cross* updates
        if (t >= 0.0 && text_TP_trial_cross.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_TP_trial_cross.tStart = t;  // (not accounting for frame time here)
          text_TP_trial_cross.frameNStart = frameN;  // exact frame index
          
          text_TP_trial_cross.setAutoDraw(true);
        }
        
        
        // if text_TP_trial_cross is active this frame...
        if (text_TP_trial_cross.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_TP_trial_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_TP_trial_cross.tStop = t;  // not accounting for scr refresh
          text_TP_trial_cross.frameNStop = frameN;  // exact frame index
          // update status
          text_TP_trial_cross.status = PsychoJS.Status.FINISHED;
          text_TP_trial_cross.setAutoDraw(false);
        }
        
        
        // *kresp_TP_trial* updates
        if (t >= 0.0 && kresp_TP_trial.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          kresp_TP_trial.tStart = t;  // (not accounting for frame time here)
          kresp_TP_trial.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { kresp_TP_trial.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_trial.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_trial.clearEvents(); });
        }
        
        // if kresp_TP_trial is active this frame...
        if (kresp_TP_trial.status === PsychoJS.Status.STARTED) {
          let theseKeys = kresp_TP_trial.getKeys({
            keyList: typeof ['g','п'] === 'string' ? [['g','п']] : ['g','п'], 
            waitRelease: false
          });
          _kresp_TP_trial_allKeys = _kresp_TP_trial_allKeys.concat(theseKeys);
          if (_kresp_TP_trial_allKeys.length > 0) {
            kresp_TP_trial.keys = _kresp_TP_trial_allKeys.map((key) => key.name);  // storing all keys
            kresp_TP_trial.rt = _kresp_TP_trial_allKeys.map((key) => key.rt);
            kresp_TP_trial.duration = _kresp_TP_trial_allKeys.map((key) => key.duration);
          }
        }
        
        
        // *text_TP_trial_end* updates
        if (t >= 121.0 && text_TP_trial_end.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_TP_trial_end.tStart = t;  // (not accounting for frame time here)
          text_TP_trial_end.frameNStart = frameN;  // exact frame index
          
          text_TP_trial_end.setAutoDraw(true);
        }
        
        
        // if text_TP_trial_end is active this frame...
        if (text_TP_trial_end.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *kresp_TP_trial_end* updates
        if (t >= 121.0 && kresp_TP_trial_end.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          kresp_TP_trial_end.tStart = t;  // (not accounting for frame time here)
          kresp_TP_trial_end.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { kresp_TP_trial_end.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_trial_end.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_trial_end.clearEvents(); });
        }
        
        // if kresp_TP_trial_end is active this frame...
        if (kresp_TP_trial_end.status === PsychoJS.Status.STARTED) {
          let theseKeys = kresp_TP_trial_end.getKeys({
            keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
            waitRelease: false
          });
          _kresp_TP_trial_end_allKeys = _kresp_TP_trial_end_allKeys.concat(theseKeys);
          if (_kresp_TP_trial_end_allKeys.length > 0) {
            kresp_TP_trial_end.keys = _kresp_TP_trial_end_allKeys[_kresp_TP_trial_end_allKeys.length - 1].name;  // just the last key pressed
            kresp_TP_trial_end.rt = _kresp_TP_trial_end_allKeys[_kresp_TP_trial_end_allKeys.length - 1].rt;
            kresp_TP_trial_end.duration = _kresp_TP_trial_end_allKeys[_kresp_TP_trial_end_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        TP_trialComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function TP_trialRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'TP_trial' ---
        TP_trialComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('TP_trial.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_TP_trial_IRI
        for (let i = 1; i < g_t_1.length; i++) {
            pressed_iris_1.push(g_t_1[i] - g_t_1[i-1]);
        }
        var iris_str_1 = pressed_iris_1.map(String).join('; ');
        var key_str_1 = key_pressed_1.map(String).join('; ');
        psychoJS.experiment.addData('IRIs_1', iris_str_1);
        psychoJS.experiment.addData('KEY_1', key_str_1);
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(kresp_TP_trial.corr, level);
        }
        psychoJS.experiment.addData('kresp_TP_trial.keys', kresp_TP_trial.keys);
        if (typeof kresp_TP_trial.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('kresp_TP_trial.rt', kresp_TP_trial.rt);
            psychoJS.experiment.addData('kresp_TP_trial.duration', kresp_TP_trial.duration);
            }
        
        kresp_TP_trial.stop();
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(kresp_TP_trial_end.corr, level);
        }
        psychoJS.experiment.addData('kresp_TP_trial_end.keys', kresp_TP_trial_end.keys);
        if (typeof kresp_TP_trial_end.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('kresp_TP_trial_end.rt', kresp_TP_trial_end.rt);
            psychoJS.experiment.addData('kresp_TP_trial_end.duration', kresp_TP_trial_end.duration);
            routineTimer.reset();
            }
        
        kresp_TP_trial_end.stop();
        // the Routine "TP_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var TP_IC_instr_1MaxDurationReached;
var msg_TP_IC_instr_1;
var _kresp_TP_IC_instr_1_allKeys;
var TP_IC_instr_1MaxDuration;
var TP_IC_instr_1Components;
function TP_IC_instr_1RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'TP_IC_instr_1' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        TP_IC_instr_1Clock.reset();
        routineTimer.reset();
        TP_IC_instr_1MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_TP_IC_instr_1
        msg_TP_IC_instr_1 = `в этой части эксперимента на экране друг за другом будут быстро появляться буквы ${nogo_letter} и ${go_letter}. между ними нужно смотреть на крест в центре экрана
        
        вы будете выполнять ДВЕ ЗАДАЧИ одновременно:
        
        1) НЕ ВЕДУЩЕЙ рукой (для правши - левой) нажимать на клавишу G(П) каждые 5 секунд
        2) ВЕДУЩЕЙ рукой (для правши - правой) нажимать на ПРОБЕЛ после ${nogo_letter} и ничего не нажимать после ${go_letter}
        
        нужно распределить внимание ПОРОВНУ между этими задачами, выполнять их параллельно и одинаково внимательно
        
        чтобы читать дальше, нажмите стрелку вправо (->)`
        ;
        
        text_TP_IC_instr_1.setText(msg_TP_IC_instr_1);
        kresp_TP_IC_instr_1.keys = undefined;
        kresp_TP_IC_instr_1.rt = undefined;
        _kresp_TP_IC_instr_1_allKeys = [];
        psychoJS.experiment.addData('TP_IC_instr_1.started', globalClock.getTime());
        TP_IC_instr_1MaxDuration = null
        // keep track of which components have finished
        TP_IC_instr_1Components = [];
        TP_IC_instr_1Components.push(text_TP_IC_instr_1);
        TP_IC_instr_1Components.push(kresp_TP_IC_instr_1);
        
        TP_IC_instr_1Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function TP_IC_instr_1RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'TP_IC_instr_1' ---
        // get current time
        t = TP_IC_instr_1Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_TP_IC_instr_1* updates
        if (t >= 0.0 && text_TP_IC_instr_1.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_TP_IC_instr_1.tStart = t;  // (not accounting for frame time here)
          text_TP_IC_instr_1.frameNStart = frameN;  // exact frame index
          
          text_TP_IC_instr_1.setAutoDraw(true);
        }
        
        
        // if text_TP_IC_instr_1 is active this frame...
        if (text_TP_IC_instr_1.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *kresp_TP_IC_instr_1* updates
        if (t >= 1.0 && kresp_TP_IC_instr_1.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          kresp_TP_IC_instr_1.tStart = t;  // (not accounting for frame time here)
          kresp_TP_IC_instr_1.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_instr_1.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_instr_1.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_instr_1.clearEvents(); });
        }
        
        // if kresp_TP_IC_instr_1 is active this frame...
        if (kresp_TP_IC_instr_1.status === PsychoJS.Status.STARTED) {
          let theseKeys = kresp_TP_IC_instr_1.getKeys({
            keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
            waitRelease: false
          });
          _kresp_TP_IC_instr_1_allKeys = _kresp_TP_IC_instr_1_allKeys.concat(theseKeys);
          if (_kresp_TP_IC_instr_1_allKeys.length > 0) {
            kresp_TP_IC_instr_1.keys = _kresp_TP_IC_instr_1_allKeys[_kresp_TP_IC_instr_1_allKeys.length - 1].name;  // just the last key pressed
            kresp_TP_IC_instr_1.rt = _kresp_TP_IC_instr_1_allKeys[_kresp_TP_IC_instr_1_allKeys.length - 1].rt;
            kresp_TP_IC_instr_1.duration = _kresp_TP_IC_instr_1_allKeys[_kresp_TP_IC_instr_1_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        TP_IC_instr_1Components.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function TP_IC_instr_1RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'TP_IC_instr_1' ---
        TP_IC_instr_1Components.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('TP_IC_instr_1.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(kresp_TP_IC_instr_1.corr, level);
        }
        psychoJS.experiment.addData('kresp_TP_IC_instr_1.keys', kresp_TP_IC_instr_1.keys);
        if (typeof kresp_TP_IC_instr_1.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('kresp_TP_IC_instr_1.rt', kresp_TP_IC_instr_1.rt);
            psychoJS.experiment.addData('kresp_TP_IC_instr_1.duration', kresp_TP_IC_instr_1.duration);
            routineTimer.reset();
            }
        
        kresp_TP_IC_instr_1.stop();
        // the Routine "TP_IC_instr_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var TP_IC_instr_2MaxDurationReached;
var msg_TP_IC_instr_2;
var _kresp_TP_IC_instr_2_allKeys;
var TP_IC_instr_2MaxDuration;
var TP_IC_instr_2Components;
function TP_IC_instr_2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'TP_IC_instr_2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        TP_IC_instr_2Clock.reset();
        routineTimer.reset();
        TP_IC_instr_2MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_TP_IC_instr_2
        msg_TP_IC_instr_2 = `первый раз на G(П) нужно нажать, как только увидите крест в центре экрана. старайтесь отмерять промежутки между нажатиями как можно точнее, не используйте сторонние устройства, полагайтесь на свое внутреннее ощущение времени
        
        старайтесь нажимать на ПРОБЕЛ после ${nogo_letter} как можно быстрее и при этом не совершать ошибок
        
        сначала будет небольшая тренировка с обратной связью по второй задаче (верно/неверно)
        
        чтобы начать, нажмите стрелку вправо (->)`
        ;
        
        
        text_TP_IC_instr_2.setText(msg_TP_IC_instr_2);
        kresp_TP_IC_instr_2.keys = undefined;
        kresp_TP_IC_instr_2.rt = undefined;
        _kresp_TP_IC_instr_2_allKeys = [];
        psychoJS.experiment.addData('TP_IC_instr_2.started', globalClock.getTime());
        TP_IC_instr_2MaxDuration = null
        // keep track of which components have finished
        TP_IC_instr_2Components = [];
        TP_IC_instr_2Components.push(text_TP_IC_instr_2);
        TP_IC_instr_2Components.push(kresp_TP_IC_instr_2);
        
        TP_IC_instr_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function TP_IC_instr_2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'TP_IC_instr_2' ---
        // get current time
        t = TP_IC_instr_2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_TP_IC_instr_2* updates
        if (t >= 0.0 && text_TP_IC_instr_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_TP_IC_instr_2.tStart = t;  // (not accounting for frame time here)
          text_TP_IC_instr_2.frameNStart = frameN;  // exact frame index
          
          text_TP_IC_instr_2.setAutoDraw(true);
        }
        
        
        // if text_TP_IC_instr_2 is active this frame...
        if (text_TP_IC_instr_2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *kresp_TP_IC_instr_2* updates
        if (t >= 1.0 && kresp_TP_IC_instr_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          kresp_TP_IC_instr_2.tStart = t;  // (not accounting for frame time here)
          kresp_TP_IC_instr_2.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_instr_2.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_instr_2.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_instr_2.clearEvents(); });
        }
        
        // if kresp_TP_IC_instr_2 is active this frame...
        if (kresp_TP_IC_instr_2.status === PsychoJS.Status.STARTED) {
          let theseKeys = kresp_TP_IC_instr_2.getKeys({
            keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
            waitRelease: false
          });
          _kresp_TP_IC_instr_2_allKeys = _kresp_TP_IC_instr_2_allKeys.concat(theseKeys);
          if (_kresp_TP_IC_instr_2_allKeys.length > 0) {
            kresp_TP_IC_instr_2.keys = _kresp_TP_IC_instr_2_allKeys[_kresp_TP_IC_instr_2_allKeys.length - 1].name;  // just the last key pressed
            kresp_TP_IC_instr_2.rt = _kresp_TP_IC_instr_2_allKeys[_kresp_TP_IC_instr_2_allKeys.length - 1].rt;
            kresp_TP_IC_instr_2.duration = _kresp_TP_IC_instr_2_allKeys[_kresp_TP_IC_instr_2_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        TP_IC_instr_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function TP_IC_instr_2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'TP_IC_instr_2' ---
        TP_IC_instr_2Components.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('TP_IC_instr_2.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(kresp_TP_IC_instr_2.corr, level);
        }
        psychoJS.experiment.addData('kresp_TP_IC_instr_2.keys', kresp_TP_IC_instr_2.keys);
        if (typeof kresp_TP_IC_instr_2.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('kresp_TP_IC_instr_2.rt', kresp_TP_IC_instr_2.rt);
            psychoJS.experiment.addData('kresp_TP_IC_instr_2.duration', kresp_TP_IC_instr_2.duration);
            routineTimer.reset();
            }
        
        kresp_TP_IC_instr_2.stop();
        // the Routine "TP_IC_instr_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var TP_IC_trainMaxDurationReached;
var _kresp_TP_IC_train_G_allKeys;
var _kresp_TP_IC_train_space_allKeys;
var TP_IC_trainMaxDuration;
var TP_IC_trainComponents;
function TP_IC_trainRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'TP_IC_train' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        TP_IC_trainClock.reset(routineTimer.getTime());
        routineTimer.add(1.100000);
        TP_IC_trainMaxDurationReached = false;
        // update component parameters for each repeat
        kresp_TP_IC_train_G.keys = undefined;
        kresp_TP_IC_train_G.rt = undefined;
        _kresp_TP_IC_train_G_allKeys = [];
        text_TP_IC_train_letter.setText(letter);
        kresp_TP_IC_train_space.keys = undefined;
        kresp_TP_IC_train_space.rt = undefined;
        _kresp_TP_IC_train_space_allKeys = [];
        psychoJS.experiment.addData('TP_IC_train.started', globalClock.getTime());
        TP_IC_trainMaxDuration = null
        // keep track of which components have finished
        TP_IC_trainComponents = [];
        TP_IC_trainComponents.push(kresp_TP_IC_train_G);
        TP_IC_trainComponents.push(text_TP_IC_train_cross);
        TP_IC_trainComponents.push(text_TP_IC_train_letter);
        TP_IC_trainComponents.push(kresp_TP_IC_train_space);
        
        TP_IC_trainComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function TP_IC_trainRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'TP_IC_train' ---
        // get current time
        t = TP_IC_trainClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *kresp_TP_IC_train_G* updates
        if (t >= 0.0 && kresp_TP_IC_train_G.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          kresp_TP_IC_train_G.tStart = t;  // (not accounting for frame time here)
          kresp_TP_IC_train_G.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_train_G.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_train_G.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { kresp_TP_IC_train_G.clearEvents(); });
        }
        frameRemains = 0.0 + 1.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (kresp_TP_IC_train_G.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          kresp_TP_IC_train_G.tStop = t;  // not accounting for scr refresh
          kresp_TP_IC_train_G.frameNStop = frameN;  // exact frame index
          // update status
          kresp_TP_IC_train_G.status = PsychoJS.Status.FINISHED;
          frameRemains = 0.0 + 1.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (kresp_TP_IC_train_G.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            kresp_TP_IC_train_G.tStop = t;  // not accounting for scr refresh
            kresp_TP_IC_train_G.frameNStop = frameN;  // exact frame index
            // update status
            kresp_TP_IC_train_G.status = PsychoJS.Status.FINISHED;
            kresp_TP_IC_train_G.status = PsychoJS.Status.FINISHED;
              }
            
          }
          
          // if kresp_TP_IC_train_G is active this frame...
          if (kresp_TP_IC_train_G.status === PsychoJS.Status.STARTED) {
            let theseKeys = kresp_TP_IC_train_G.getKeys({
              keyList: typeof ['g','п'] === 'string' ? [['g','п']] : ['g','п'], 
              waitRelease: false
            });
            _kresp_TP_IC_train_G_allKeys = _kresp_TP_IC_train_G_allKeys.concat(theseKeys);
            if (_kresp_TP_IC_train_G_allKeys.length > 0) {
              kresp_TP_IC_train_G.keys = _kresp_TP_IC_train_G_allKeys.map((key) => key.name);  // storing all keys
              kresp_TP_IC_train_G.rt = _kresp_TP_IC_train_G_allKeys.map((key) => key.rt);
              kresp_TP_IC_train_G.duration = _kresp_TP_IC_train_G_allKeys.map((key) => key.duration);
            }
          }
          
          
          // *text_TP_IC_train_cross* updates
          if (t >= 0.0 && text_TP_IC_train_cross.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            text_TP_IC_train_cross.tStart = t;  // (not accounting for frame time here)
            text_TP_IC_train_cross.frameNStart = frameN;  // exact frame index
            
            text_TP_IC_train_cross.setAutoDraw(true);
          }
          
          
          // if text_TP_IC_train_cross is active this frame...
          if (text_TP_IC_train_cross.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (text_TP_IC_train_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            text_TP_IC_train_cross.tStop = t;  // not accounting for scr refresh
            text_TP_IC_train_cross.frameNStop = frameN;  // exact frame index
            // update status
            text_TP_IC_train_cross.status = PsychoJS.Status.FINISHED;
            text_TP_IC_train_cross.setAutoDraw(false);
          }
          
          
          // *text_TP_IC_train_letter* updates
          if (t >= 0.25 && text_TP_IC_train_letter.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            text_TP_IC_train_letter.tStart = t;  // (not accounting for frame time here)
            text_TP_IC_train_letter.frameNStart = frameN;  // exact frame index
            
            text_TP_IC_train_letter.setAutoDraw(true);
          }
          
          
          // if text_TP_IC_train_letter is active this frame...
          if (text_TP_IC_train_letter.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (text_TP_IC_train_letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            text_TP_IC_train_letter.tStop = t;  // not accounting for scr refresh
            text_TP_IC_train_letter.frameNStop = frameN;  // exact frame index
            // update status
            text_TP_IC_train_letter.status = PsychoJS.Status.FINISHED;
            text_TP_IC_train_letter.setAutoDraw(false);
          }
          
          
          // *kresp_TP_IC_train_space* updates
          if (t >= 0.25 && kresp_TP_IC_train_space.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            kresp_TP_IC_train_space.tStart = t;  // (not accounting for frame time here)
            kresp_TP_IC_train_space.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { kresp_TP_IC_train_space.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { kresp_TP_IC_train_space.start(); }); // start on screen flip
          }
          frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (kresp_TP_IC_train_space.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            kresp_TP_IC_train_space.tStop = t;  // not accounting for scr refresh
            kresp_TP_IC_train_space.frameNStop = frameN;  // exact frame index
            // update status
            kresp_TP_IC_train_space.status = PsychoJS.Status.FINISHED;
            frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (kresp_TP_IC_train_space.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              kresp_TP_IC_train_space.tStop = t;  // not accounting for scr refresh
              kresp_TP_IC_train_space.frameNStop = frameN;  // exact frame index
              // update status
              kresp_TP_IC_train_space.status = PsychoJS.Status.FINISHED;
              kresp_TP_IC_train_space.status = PsychoJS.Status.FINISHED;
                }
              
            }
            
            // if kresp_TP_IC_train_space is active this frame...
            if (kresp_TP_IC_train_space.status === PsychoJS.Status.STARTED) {
              let theseKeys = kresp_TP_IC_train_space.getKeys({
                keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                waitRelease: false
              });
              _kresp_TP_IC_train_space_allKeys = _kresp_TP_IC_train_space_allKeys.concat(theseKeys);
              if (_kresp_TP_IC_train_space_allKeys.length > 0) {
                kresp_TP_IC_train_space.keys = _kresp_TP_IC_train_space_allKeys[_kresp_TP_IC_train_space_allKeys.length - 1].name;  // just the last key pressed
                kresp_TP_IC_train_space.rt = _kresp_TP_IC_train_space_allKeys[_kresp_TP_IC_train_space_allKeys.length - 1].rt;
                kresp_TP_IC_train_space.duration = _kresp_TP_IC_train_space_allKeys[_kresp_TP_IC_train_space_allKeys.length - 1].duration;
                // was this correct?
                if (kresp_TP_IC_train_space.keys == corr_answer) {
                    kresp_TP_IC_train_space.corr = 1;
                } else {
                    kresp_TP_IC_train_space.corr = 0;
                }
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            TP_IC_trainComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function TP_IC_trainRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'TP_IC_train' ---
            TP_IC_trainComponents.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('TP_IC_train.stopped', globalClock.getTime());
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(kresp_TP_IC_train_G.corr, level);
            }
            psychoJS.experiment.addData('kresp_TP_IC_train_G.keys', kresp_TP_IC_train_G.keys);
            if (typeof kresp_TP_IC_train_G.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('kresp_TP_IC_train_G.rt', kresp_TP_IC_train_G.rt);
                psychoJS.experiment.addData('kresp_TP_IC_train_G.duration', kresp_TP_IC_train_G.duration);
                }
            
            kresp_TP_IC_train_G.stop();
            // was no response the correct answer?!
            if (kresp_TP_IC_train_space.keys === undefined) {
              if (['None','none',undefined].includes(corr_answer)) {
                 kresp_TP_IC_train_space.corr = 1;  // correct non-response
              } else {
                 kresp_TP_IC_train_space.corr = 0;  // failed to respond (incorrectly)
              }
            }
            // store data for current loop
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(kresp_TP_IC_train_space.corr, level);
            }
            psychoJS.experiment.addData('kresp_TP_IC_train_space.keys', kresp_TP_IC_train_space.keys);
            psychoJS.experiment.addData('kresp_TP_IC_train_space.corr', kresp_TP_IC_train_space.corr);
            if (typeof kresp_TP_IC_train_space.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('kresp_TP_IC_train_space.rt', kresp_TP_IC_train_space.rt);
                psychoJS.experiment.addData('kresp_TP_IC_train_space.duration', kresp_TP_IC_train_space.duration);
                routineTimer.reset();
                }
            
            kresp_TP_IC_train_space.stop();
            if (routineForceEnded) {
                routineTimer.reset();} else if (TP_IC_trainMaxDurationReached) {
                TP_IC_trainClock.add(TP_IC_trainMaxDuration);
            } else {
                TP_IC_trainClock.add(1.100000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var TP_IC_fbMaxDurationReached;
var TP_IC_fbMaxDuration;
var TP_IC_fbComponents;
function TP_IC_fbRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'TP_IC_fb' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            TP_IC_fbClock.reset(routineTimer.getTime());
            routineTimer.add(1.500000);
            TP_IC_fbMaxDurationReached = false;
            // update component parameters for each repeat
            // Run 'Begin Routine' code from code_TP_IC_fb
            if ((letter === go_letter)) {
                if (!kresp_TP_IC_train_space.keys || kresp_TP_IC_train_space.keys.length === 0) {
                    msg_TP_IC_fb = "верно!";
                } else if (kresp_TP_IC_train_space.keys === "space") {
                    msg_TP_IC_fb = `неверно, пробел нужно нажимать после ${nogo_letter}`;
                }
            } else {
                if (!kresp_TP_IC_train_space.keys || kresp_TP_IC_train_space.keys.length === 0) {
                    msg_TP_IC_fb = `неверно, после ${nogo_letter} нужно нажать пробел`;
                } else if (kresp_TP_IC_train_space.keys === "space") {
                    msg_TP_IC_fb = "верно!";
                }
            }
            text_TP_IC_fb.setText(msg_TP_IC_fb);
            psychoJS.experiment.addData('TP_IC_fb.started', globalClock.getTime());
            TP_IC_fbMaxDuration = null
            // keep track of which components have finished
            TP_IC_fbComponents = [];
            TP_IC_fbComponents.push(text_TP_IC_fb);
            
            TP_IC_fbComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
               });
            return Scheduler.Event.NEXT;
          }
        }
        
        
function TP_IC_fbRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'TP_IC_fb' ---
            // get current time
            t = TP_IC_fbClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *text_TP_IC_fb* updates
            if (t >= 0.0 && text_TP_IC_fb.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_TP_IC_fb.tStart = t;  // (not accounting for frame time here)
              text_TP_IC_fb.frameNStart = frameN;  // exact frame index
              
              text_TP_IC_fb.setAutoDraw(true);
            }
            
            
            // if text_TP_IC_fb is active this frame...
            if (text_TP_IC_fb.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (text_TP_IC_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              text_TP_IC_fb.tStop = t;  // not accounting for scr refresh
              text_TP_IC_fb.frameNStop = frameN;  // exact frame index
              // update status
              text_TP_IC_fb.status = PsychoJS.Status.FINISHED;
              text_TP_IC_fb.setAutoDraw(false);
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            TP_IC_fbComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function TP_IC_fbRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'TP_IC_fb' ---
            TP_IC_fbComponents.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('TP_IC_fb.stopped', globalClock.getTime());
            // Run 'End Routine' code from code_TP_IC_fb
            msg_TP_IC_fb = "";
            psychoJS.eventManager.clearEvents();
            
            if (routineForceEnded) {
                routineTimer.reset();} else if (TP_IC_fbMaxDurationReached) {
                TP_IC_fbClock.add(TP_IC_fbMaxDuration);
            } else {
                TP_IC_fbClock.add(1.500000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var TP_IC_train_endMaxDurationReached;
var _kresp_TP_IC_train_end_allKeys;
var TP_IC_train_endMaxDuration;
var TP_IC_train_endComponents;
function TP_IC_train_endRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'TP_IC_train_end' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            TP_IC_train_endClock.reset();
            routineTimer.reset();
            TP_IC_train_endMaxDurationReached = false;
            // update component parameters for each repeat
            kresp_TP_IC_train_end.keys = undefined;
            kresp_TP_IC_train_end.rt = undefined;
            _kresp_TP_IC_train_end_allKeys = [];
            psychoJS.experiment.addData('TP_IC_train_end.started', globalClock.getTime());
            TP_IC_train_endMaxDuration = null
            // keep track of which components have finished
            TP_IC_train_endComponents = [];
            TP_IC_train_endComponents.push(text_TP_IC_train_end);
            TP_IC_train_endComponents.push(kresp_TP_IC_train_end);
            
            TP_IC_train_endComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
               });
            return Scheduler.Event.NEXT;
          }
        }
        
        
function TP_IC_train_endRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'TP_IC_train_end' ---
            // get current time
            t = TP_IC_train_endClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *text_TP_IC_train_end* updates
            if (t >= 0.0 && text_TP_IC_train_end.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_TP_IC_train_end.tStart = t;  // (not accounting for frame time here)
              text_TP_IC_train_end.frameNStart = frameN;  // exact frame index
              
              text_TP_IC_train_end.setAutoDraw(true);
            }
            
            
            // if text_TP_IC_train_end is active this frame...
            if (text_TP_IC_train_end.status === PsychoJS.Status.STARTED) {
            }
            
            
            // *kresp_TP_IC_train_end* updates
            if (t >= 1.0 && kresp_TP_IC_train_end.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              kresp_TP_IC_train_end.tStart = t;  // (not accounting for frame time here)
              kresp_TP_IC_train_end.frameNStart = frameN;  // exact frame index
              
              // keyboard checking is just starting
              psychoJS.window.callOnFlip(function() { kresp_TP_IC_train_end.clock.reset(); });  // t=0 on next screen flip
              psychoJS.window.callOnFlip(function() { kresp_TP_IC_train_end.start(); }); // start on screen flip
              psychoJS.window.callOnFlip(function() { kresp_TP_IC_train_end.clearEvents(); });
            }
            
            // if kresp_TP_IC_train_end is active this frame...
            if (kresp_TP_IC_train_end.status === PsychoJS.Status.STARTED) {
              let theseKeys = kresp_TP_IC_train_end.getKeys({
                keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
                waitRelease: false
              });
              _kresp_TP_IC_train_end_allKeys = _kresp_TP_IC_train_end_allKeys.concat(theseKeys);
              if (_kresp_TP_IC_train_end_allKeys.length > 0) {
                kresp_TP_IC_train_end.keys = _kresp_TP_IC_train_end_allKeys[_kresp_TP_IC_train_end_allKeys.length - 1].name;  // just the last key pressed
                kresp_TP_IC_train_end.rt = _kresp_TP_IC_train_end_allKeys[_kresp_TP_IC_train_end_allKeys.length - 1].rt;
                kresp_TP_IC_train_end.duration = _kresp_TP_IC_train_end_allKeys[_kresp_TP_IC_train_end_allKeys.length - 1].duration;
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            TP_IC_train_endComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function TP_IC_train_endRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'TP_IC_train_end' ---
            TP_IC_train_endComponents.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('TP_IC_train_end.stopped', globalClock.getTime());
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(kresp_TP_IC_train_end.corr, level);
            }
            psychoJS.experiment.addData('kresp_TP_IC_train_end.keys', kresp_TP_IC_train_end.keys);
            if (typeof kresp_TP_IC_train_end.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('kresp_TP_IC_train_end.rt', kresp_TP_IC_train_end.rt);
                psychoJS.experiment.addData('kresp_TP_IC_train_end.duration', kresp_TP_IC_train_end.duration);
                routineTimer.reset();
                }
            
            kresp_TP_IC_train_end.stop();
            // the Routine "TP_IC_train_end" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset();
            
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var TP_IC_trialMaxDurationReached;
var _kresp_TP_IC_trial_G_allKeys;
var _kresp_TP_IC_trial_space_allKeys;
var TP_IC_trialMaxDuration;
var TP_IC_trialComponents;
function TP_IC_trialRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'TP_IC_trial' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            TP_IC_trialClock.reset(routineTimer.getTime());
            routineTimer.add(1.100000);
            TP_IC_trialMaxDurationReached = false;
            // update component parameters for each repeat
            kresp_TP_IC_trial_G.keys = undefined;
            kresp_TP_IC_trial_G.rt = undefined;
            _kresp_TP_IC_trial_G_allKeys = [];
            text_TP_IC_trial_letter.setText(letter);
            kresp_TP_IC_trial_space.keys = undefined;
            kresp_TP_IC_trial_space.rt = undefined;
            _kresp_TP_IC_trial_space_allKeys = [];
            psychoJS.experiment.addData('TP_IC_trial.started', globalClock.getTime());
            TP_IC_trialMaxDuration = null
            // keep track of which components have finished
            TP_IC_trialComponents = [];
            TP_IC_trialComponents.push(kresp_TP_IC_trial_G);
            TP_IC_trialComponents.push(text_TP_IC_trial_cross);
            TP_IC_trialComponents.push(text_TP_IC_trial_letter);
            TP_IC_trialComponents.push(kresp_TP_IC_trial_space);
            
            TP_IC_trialComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
               });
            return Scheduler.Event.NEXT;
          }
        }
        
        
function TP_IC_trialRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'TP_IC_trial' ---
            // get current time
            t = TP_IC_trialClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            // Run 'Each Frame' code from code_TP_IC_trial_IRI
            let keysWithTime_2 = psychoJS.eventManager.getKeys({timeStamped: true});
            
            for (let i = 0; i < keysWithTime_2.length; i++) {
                let keyName = keysWithTime_2[i][0];
                let keyTime = keysWithTime_2[i][1];
                key_pressed_2.push(keyName);
                if (keyName === 'g' || keyName === 'G'|| keyName === 'п'|| keyName === 'П') {
                    g_t_2.push(keyTime);
                } 
            }
            
            // *kresp_TP_IC_trial_G* updates
            if (t >= 0.0 && kresp_TP_IC_trial_G.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              kresp_TP_IC_trial_G.tStart = t;  // (not accounting for frame time here)
              kresp_TP_IC_trial_G.frameNStart = frameN;  // exact frame index
              
              // keyboard checking is just starting
              psychoJS.window.callOnFlip(function() { kresp_TP_IC_trial_G.clock.reset(); });  // t=0 on next screen flip
              psychoJS.window.callOnFlip(function() { kresp_TP_IC_trial_G.start(); }); // start on screen flip
              psychoJS.window.callOnFlip(function() { kresp_TP_IC_trial_G.clearEvents(); });
            }
            frameRemains = 0.0 + 1.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (kresp_TP_IC_trial_G.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              kresp_TP_IC_trial_G.tStop = t;  // not accounting for scr refresh
              kresp_TP_IC_trial_G.frameNStop = frameN;  // exact frame index
              // update status
              kresp_TP_IC_trial_G.status = PsychoJS.Status.FINISHED;
              frameRemains = 0.0 + 1.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (kresp_TP_IC_trial_G.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                kresp_TP_IC_trial_G.tStop = t;  // not accounting for scr refresh
                kresp_TP_IC_trial_G.frameNStop = frameN;  // exact frame index
                // update status
                kresp_TP_IC_trial_G.status = PsychoJS.Status.FINISHED;
                kresp_TP_IC_trial_G.status = PsychoJS.Status.FINISHED;
                  }
                
              }
              
              // if kresp_TP_IC_trial_G is active this frame...
              if (kresp_TP_IC_trial_G.status === PsychoJS.Status.STARTED) {
                let theseKeys = kresp_TP_IC_trial_G.getKeys({
                  keyList: typeof ['g','п'] === 'string' ? [['g','п']] : ['g','п'], 
                  waitRelease: false
                });
                _kresp_TP_IC_trial_G_allKeys = _kresp_TP_IC_trial_G_allKeys.concat(theseKeys);
                if (_kresp_TP_IC_trial_G_allKeys.length > 0) {
                  kresp_TP_IC_trial_G.keys = _kresp_TP_IC_trial_G_allKeys.map((key) => key.name);  // storing all keys
                  kresp_TP_IC_trial_G.rt = _kresp_TP_IC_trial_G_allKeys.map((key) => key.rt);
                  kresp_TP_IC_trial_G.duration = _kresp_TP_IC_trial_G_allKeys.map((key) => key.duration);
                }
              }
              
              
              // *text_TP_IC_trial_cross* updates
              if (t >= 0.0 && text_TP_IC_trial_cross.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                text_TP_IC_trial_cross.tStart = t;  // (not accounting for frame time here)
                text_TP_IC_trial_cross.frameNStart = frameN;  // exact frame index
                
                text_TP_IC_trial_cross.setAutoDraw(true);
              }
              
              
              // if text_TP_IC_trial_cross is active this frame...
              if (text_TP_IC_trial_cross.status === PsychoJS.Status.STARTED) {
              }
              
              frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (text_TP_IC_trial_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                text_TP_IC_trial_cross.tStop = t;  // not accounting for scr refresh
                text_TP_IC_trial_cross.frameNStop = frameN;  // exact frame index
                // update status
                text_TP_IC_trial_cross.status = PsychoJS.Status.FINISHED;
                text_TP_IC_trial_cross.setAutoDraw(false);
              }
              
              
              // *text_TP_IC_trial_letter* updates
              if (t >= 0.25 && text_TP_IC_trial_letter.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                text_TP_IC_trial_letter.tStart = t;  // (not accounting for frame time here)
                text_TP_IC_trial_letter.frameNStart = frameN;  // exact frame index
                
                text_TP_IC_trial_letter.setAutoDraw(true);
              }
              
              
              // if text_TP_IC_trial_letter is active this frame...
              if (text_TP_IC_trial_letter.status === PsychoJS.Status.STARTED) {
              }
              
              frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (text_TP_IC_trial_letter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                text_TP_IC_trial_letter.tStop = t;  // not accounting for scr refresh
                text_TP_IC_trial_letter.frameNStop = frameN;  // exact frame index
                // update status
                text_TP_IC_trial_letter.status = PsychoJS.Status.FINISHED;
                text_TP_IC_trial_letter.setAutoDraw(false);
              }
              
              
              // *kresp_TP_IC_trial_space* updates
              if (t >= 0.25 && kresp_TP_IC_trial_space.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                kresp_TP_IC_trial_space.tStart = t;  // (not accounting for frame time here)
                kresp_TP_IC_trial_space.frameNStart = frameN;  // exact frame index
                
                // keyboard checking is just starting
                psychoJS.window.callOnFlip(function() { kresp_TP_IC_trial_space.clock.reset(); });  // t=0 on next screen flip
                psychoJS.window.callOnFlip(function() { kresp_TP_IC_trial_space.start(); }); // start on screen flip
              }
              frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (kresp_TP_IC_trial_space.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                kresp_TP_IC_trial_space.tStop = t;  // not accounting for scr refresh
                kresp_TP_IC_trial_space.frameNStop = frameN;  // exact frame index
                // update status
                kresp_TP_IC_trial_space.status = PsychoJS.Status.FINISHED;
                frameRemains = 0.25 + 0.85 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                if (kresp_TP_IC_trial_space.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                  // keep track of stop time/frame for later
                  kresp_TP_IC_trial_space.tStop = t;  // not accounting for scr refresh
                  kresp_TP_IC_trial_space.frameNStop = frameN;  // exact frame index
                  // update status
                  kresp_TP_IC_trial_space.status = PsychoJS.Status.FINISHED;
                  kresp_TP_IC_trial_space.status = PsychoJS.Status.FINISHED;
                    }
                  
                }
                
                // if kresp_TP_IC_trial_space is active this frame...
                if (kresp_TP_IC_trial_space.status === PsychoJS.Status.STARTED) {
                  let theseKeys = kresp_TP_IC_trial_space.getKeys({
                    keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                    waitRelease: false
                  });
                  _kresp_TP_IC_trial_space_allKeys = _kresp_TP_IC_trial_space_allKeys.concat(theseKeys);
                  if (_kresp_TP_IC_trial_space_allKeys.length > 0) {
                    kresp_TP_IC_trial_space.keys = _kresp_TP_IC_trial_space_allKeys[_kresp_TP_IC_trial_space_allKeys.length - 1].name;  // just the last key pressed
                    kresp_TP_IC_trial_space.rt = _kresp_TP_IC_trial_space_allKeys[_kresp_TP_IC_trial_space_allKeys.length - 1].rt;
                    kresp_TP_IC_trial_space.duration = _kresp_TP_IC_trial_space_allKeys[_kresp_TP_IC_trial_space_allKeys.length - 1].duration;
                    // was this correct?
                    if (kresp_TP_IC_trial_space.keys == corr_answer) {
                        kresp_TP_IC_trial_space.corr = 1;
                    } else {
                        kresp_TP_IC_trial_space.corr = 0;
                    }
                    // a response ends the routine
                    continueRoutine = false;
                  }
                }
                
                // check for quit (typically the Esc key)
                if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                }
                
                // check if the Routine should terminate
                if (!continueRoutine) {  // a component has requested a forced-end of Routine
                  routineForceEnded = true;
                  return Scheduler.Event.NEXT;
                }
                
                continueRoutine = false;  // reverts to True if at least one component still running
                TP_IC_trialComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                    continueRoutine = true;
                  }
                });
                
                // refresh the screen if continuing
                if (continueRoutine && routineTimer.getTime() > 0) {
                  return Scheduler.Event.FLIP_REPEAT;
                } else {
                  return Scheduler.Event.NEXT;
                }
              };
            }
            
            
function TP_IC_trialRoutineEnd(snapshot) {
              return async function () {
                //--- Ending Routine 'TP_IC_trial' ---
                TP_IC_trialComponents.forEach( function(thisComponent) {
                  if (typeof thisComponent.setAutoDraw === 'function') {
                    thisComponent.setAutoDraw(false);
                  }
                });
                psychoJS.experiment.addData('TP_IC_trial.stopped', globalClock.getTime());
                // update the trial handler
                if (currentLoop instanceof MultiStairHandler) {
                  currentLoop.addResponse(kresp_TP_IC_trial_G.corr, level);
                }
                psychoJS.experiment.addData('kresp_TP_IC_trial_G.keys', kresp_TP_IC_trial_G.keys);
                if (typeof kresp_TP_IC_trial_G.keys !== 'undefined') {  // we had a response
                    psychoJS.experiment.addData('kresp_TP_IC_trial_G.rt', kresp_TP_IC_trial_G.rt);
                    psychoJS.experiment.addData('kresp_TP_IC_trial_G.duration', kresp_TP_IC_trial_G.duration);
                    }
                
                kresp_TP_IC_trial_G.stop();
                // was no response the correct answer?!
                if (kresp_TP_IC_trial_space.keys === undefined) {
                  if (['None','none',undefined].includes(corr_answer)) {
                     kresp_TP_IC_trial_space.corr = 1;  // correct non-response
                  } else {
                     kresp_TP_IC_trial_space.corr = 0;  // failed to respond (incorrectly)
                  }
                }
                // store data for current loop
                // update the trial handler
                if (currentLoop instanceof MultiStairHandler) {
                  currentLoop.addResponse(kresp_TP_IC_trial_space.corr, level);
                }
                psychoJS.experiment.addData('kresp_TP_IC_trial_space.keys', kresp_TP_IC_trial_space.keys);
                psychoJS.experiment.addData('kresp_TP_IC_trial_space.corr', kresp_TP_IC_trial_space.corr);
                if (typeof kresp_TP_IC_trial_space.keys !== 'undefined') {  // we had a response
                    psychoJS.experiment.addData('kresp_TP_IC_trial_space.rt', kresp_TP_IC_trial_space.rt);
                    psychoJS.experiment.addData('kresp_TP_IC_trial_space.duration', kresp_TP_IC_trial_space.duration);
                    routineTimer.reset();
                    }
                
                kresp_TP_IC_trial_space.stop();
                if (routineForceEnded) {
                    routineTimer.reset();} else if (TP_IC_trialMaxDurationReached) {
                    TP_IC_trialClock.add(TP_IC_trialMaxDuration);
                } else {
                    TP_IC_trialClock.add(1.100000);
                }
                // Routines running outside a loop should always advance the datafile row
                if (currentLoop === psychoJS.experiment) {
                  psychoJS.experiment.nextEntry(snapshot);
                }
                return Scheduler.Event.NEXT;
              }
            }
            
            
var TP_IC_restMaxDurationReached;
var _kresp_TP_IC_rest_allKeys;
var TP_IC_restMaxDuration;
var TP_IC_restComponents;
function TP_IC_restRoutineBegin(snapshot) {
              return async function () {
                TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                
                //--- Prepare to start Routine 'TP_IC_rest' ---
                t = 0;
                frameN = -1;
                continueRoutine = true; // until we're told otherwise
                // keep track of whether this Routine was forcibly ended
                routineForceEnded = false;
                TP_IC_restClock.reset();
                routineTimer.reset();
                TP_IC_restMaxDurationReached = false;
                // update component parameters for each repeat
                // Run 'Begin Routine' code from code_TP_IC_rest
                for (let i = 1; i < g_t_2.length; i++) {
                    pressed_iris_2.push(g_t_2[i] - g_t_2[i-1]);
                }
                if (go_letter == 'X' || go_letter == 'Х'){
                    var iris_str_2 = pressed_iris_2.map(String).join('; ');
                    var key_str_2 = key_pressed_2.map(String).join('; ');
                    psychoJS.experiment.addData('IRIs_X', iris_str_2);
                    psychoJS.experiment.addData('KEY_X', key_str_2);
                } else if (go_letter == 'C' || go_letter == 'С'){
                    var iris_str_2 = pressed_iris_2.map(String).join('; ');
                    var key_str_2 = key_pressed_2.map(String).join('; ');
                    psychoJS.experiment.addData('IRIs_C', iris_str_2);
                    psychoJS.experiment.addData('KEY_C', key_str_2);
                }
                text_TP_IC_rest.setText('поздравляю, эта часть позади! можете немного отдохнуть перед следующей частью эксперимента\n\nесли готовы перейти дальше, нажмите стрелку вправо (->)');
                kresp_TP_IC_rest.keys = undefined;
                kresp_TP_IC_rest.rt = undefined;
                _kresp_TP_IC_rest_allKeys = [];
                psychoJS.experiment.addData('TP_IC_rest.started', globalClock.getTime());
                TP_IC_restMaxDuration = null
                // keep track of which components have finished
                TP_IC_restComponents = [];
                TP_IC_restComponents.push(text_TP_IC_rest);
                TP_IC_restComponents.push(kresp_TP_IC_rest);
                
                TP_IC_restComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent)
                    thisComponent.status = PsychoJS.Status.NOT_STARTED;
                   });
                return Scheduler.Event.NEXT;
              }
            }
            
            
function TP_IC_restRoutineEachFrame() {
              return async function () {
                //--- Loop for each frame of Routine 'TP_IC_rest' ---
                // get current time
                t = TP_IC_restClock.getTime();
                frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                // update/draw components on each frame
                
                // *text_TP_IC_rest* updates
                if (t >= 0.0 && text_TP_IC_rest.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  text_TP_IC_rest.tStart = t;  // (not accounting for frame time here)
                  text_TP_IC_rest.frameNStart = frameN;  // exact frame index
                  
                  text_TP_IC_rest.setAutoDraw(true);
                }
                
                
                // if text_TP_IC_rest is active this frame...
                if (text_TP_IC_rest.status === PsychoJS.Status.STARTED) {
                }
                
                
                // *kresp_TP_IC_rest* updates
                if (t >= 1.0 && kresp_TP_IC_rest.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  kresp_TP_IC_rest.tStart = t;  // (not accounting for frame time here)
                  kresp_TP_IC_rest.frameNStart = frameN;  // exact frame index
                  
                  // keyboard checking is just starting
                  psychoJS.window.callOnFlip(function() { kresp_TP_IC_rest.clock.reset(); });  // t=0 on next screen flip
                  psychoJS.window.callOnFlip(function() { kresp_TP_IC_rest.start(); }); // start on screen flip
                  psychoJS.window.callOnFlip(function() { kresp_TP_IC_rest.clearEvents(); });
                }
                
                // if kresp_TP_IC_rest is active this frame...
                if (kresp_TP_IC_rest.status === PsychoJS.Status.STARTED) {
                  let theseKeys = kresp_TP_IC_rest.getKeys({
                    keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
                    waitRelease: false
                  });
                  _kresp_TP_IC_rest_allKeys = _kresp_TP_IC_rest_allKeys.concat(theseKeys);
                  if (_kresp_TP_IC_rest_allKeys.length > 0) {
                    kresp_TP_IC_rest.keys = _kresp_TP_IC_rest_allKeys[_kresp_TP_IC_rest_allKeys.length - 1].name;  // just the last key pressed
                    kresp_TP_IC_rest.rt = _kresp_TP_IC_rest_allKeys[_kresp_TP_IC_rest_allKeys.length - 1].rt;
                    kresp_TP_IC_rest.duration = _kresp_TP_IC_rest_allKeys[_kresp_TP_IC_rest_allKeys.length - 1].duration;
                    // a response ends the routine
                    continueRoutine = false;
                  }
                }
                
                // check for quit (typically the Esc key)
                if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                }
                
                // check if the Routine should terminate
                if (!continueRoutine) {  // a component has requested a forced-end of Routine
                  routineForceEnded = true;
                  return Scheduler.Event.NEXT;
                }
                
                continueRoutine = false;  // reverts to True if at least one component still running
                TP_IC_restComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                    continueRoutine = true;
                  }
                });
                
                // refresh the screen if continuing
                if (continueRoutine) {
                  return Scheduler.Event.FLIP_REPEAT;
                } else {
                  return Scheduler.Event.NEXT;
                }
              };
            }
            
            
function TP_IC_restRoutineEnd(snapshot) {
              return async function () {
                //--- Ending Routine 'TP_IC_rest' ---
                TP_IC_restComponents.forEach( function(thisComponent) {
                  if (typeof thisComponent.setAutoDraw === 'function') {
                    thisComponent.setAutoDraw(false);
                  }
                });
                psychoJS.experiment.addData('TP_IC_rest.stopped', globalClock.getTime());
                // Run 'End Routine' code from code_TP_IC_rest
                g_t_2 = [];
                key_pressed_2 = [];
                pressed_iris_2 = [];
                // update the trial handler
                if (currentLoop instanceof MultiStairHandler) {
                  currentLoop.addResponse(kresp_TP_IC_rest.corr, level);
                }
                psychoJS.experiment.addData('kresp_TP_IC_rest.keys', kresp_TP_IC_rest.keys);
                if (typeof kresp_TP_IC_rest.keys !== 'undefined') {  // we had a response
                    psychoJS.experiment.addData('kresp_TP_IC_rest.rt', kresp_TP_IC_rest.rt);
                    psychoJS.experiment.addData('kresp_TP_IC_rest.duration', kresp_TP_IC_rest.duration);
                    routineTimer.reset();
                    }
                
                kresp_TP_IC_rest.stop();
                // the Routine "TP_IC_rest" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset();
                
                // Routines running outside a loop should always advance the datafile row
                if (currentLoop === psychoJS.experiment) {
                  psychoJS.experiment.nextEntry(snapshot);
                }
                return Scheduler.Event.NEXT;
              }
            }
            
            
var data_collectMaxDurationReached;
var data_collectMaxDuration;
var data_collectComponents;
function data_collectRoutineBegin(snapshot) {
              return async function () {
                TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                
                //--- Prepare to start Routine 'data_collect' ---
                t = 0;
                frameN = -1;
                continueRoutine = true; // until we're told otherwise
                // keep track of whether this Routine was forcibly ended
                routineForceEnded = false;
                data_collectClock.reset(routineTimer.getTime());
                routineTimer.add(1.500000);
                data_collectMaxDurationReached = false;
                // update component parameters for each repeat
                // Disable downloading results to browser 
                psychoJS._saveResults = 0;
                
                // Generate filename for results 
                let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
                
                // Extract data object from experiment 
                let dataObj = psychoJS._experiment._trialsData;
                
                // Convert data object to CSV 
                let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => { 
                return Object.values(it).toString() 
                }).join('\n')
                
                // Send data to OSF via DataPipe 
                console.log('Saving data...'); 
                fetch('https://pipe.jspsych.org/api/data', { 
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                        Accept: '*/*', 
                    }, 
                    body: JSON.stringify({ 
                    experimentID: 'e1qHUuRENc2u', // обновить, указав experiment ID из DATAPIPE на шаге 4.3
                    filename: filename,  
                    data: data, 
                    }), 
                }).then(response => response.json()).then(data => { 
                // Log response aud force experiment end 
                console.log(data); 
                quitPsychoJS(); 
                })
                psychoJS.experiment.addData('data_collect.started', globalClock.getTime());
                data_collectMaxDuration = null
                // keep track of which components have finished
                data_collectComponents = [];
                data_collectComponents.push(text_data_collect_wait);
                
                data_collectComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent)
                    thisComponent.status = PsychoJS.Status.NOT_STARTED;
                   });
                return Scheduler.Event.NEXT;
              }
            }
            
            
function data_collectRoutineEachFrame() {
              return async function () {
                //--- Loop for each frame of Routine 'data_collect' ---
                // get current time
                t = data_collectClock.getTime();
                frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                // update/draw components on each frame
                
                // *text_data_collect_wait* updates
                if (t >= 0.0 && text_data_collect_wait.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  text_data_collect_wait.tStart = t;  // (not accounting for frame time here)
                  text_data_collect_wait.frameNStart = frameN;  // exact frame index
                  
                  text_data_collect_wait.setAutoDraw(true);
                }
                
                
                // if text_data_collect_wait is active this frame...
                if (text_data_collect_wait.status === PsychoJS.Status.STARTED) {
                }
                
                frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                if (text_data_collect_wait.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                  // keep track of stop time/frame for later
                  text_data_collect_wait.tStop = t;  // not accounting for scr refresh
                  text_data_collect_wait.frameNStop = frameN;  // exact frame index
                  // update status
                  text_data_collect_wait.status = PsychoJS.Status.FINISHED;
                  text_data_collect_wait.setAutoDraw(false);
                }
                
                // check for quit (typically the Esc key)
                if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                }
                
                // check if the Routine should terminate
                if (!continueRoutine) {  // a component has requested a forced-end of Routine
                  routineForceEnded = true;
                  return Scheduler.Event.NEXT;
                }
                
                continueRoutine = false;  // reverts to True if at least one component still running
                data_collectComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                    continueRoutine = true;
                  }
                });
                
                // refresh the screen if continuing
                if (continueRoutine && routineTimer.getTime() > 0) {
                  return Scheduler.Event.FLIP_REPEAT;
                } else {
                  return Scheduler.Event.NEXT;
                }
              };
            }
            
            
function data_collectRoutineEnd(snapshot) {
              return async function () {
                //--- Ending Routine 'data_collect' ---
                data_collectComponents.forEach( function(thisComponent) {
                  if (typeof thisComponent.setAutoDraw === 'function') {
                    thisComponent.setAutoDraw(false);
                  }
                });
                psychoJS.experiment.addData('data_collect.stopped', globalClock.getTime());
                if (routineForceEnded) {
                    routineTimer.reset();} else if (data_collectMaxDurationReached) {
                    data_collectClock.add(data_collectMaxDuration);
                } else {
                    data_collectClock.add(1.500000);
                }
                // Routines running outside a loop should always advance the datafile row
                if (currentLoop === psychoJS.experiment) {
                  psychoJS.experiment.nextEntry(snapshot);
                }
                return Scheduler.Event.NEXT;
              }
            }
            
            
function importConditions(currentLoop) {
              return async function () {
                psychoJS.importAttributes(currentLoop.getCurrentTrial());
                return Scheduler.Event.NEXT;
                };
            }
            
            
async function quitPsychoJS(message, isCompleted) {
              // Check for and save orphaned data
              if (psychoJS.experiment.isEntryEmpty()) {
                psychoJS.experiment.nextEntry();
              }
              psychoJS.window.close();
              psychoJS.quit({message: message, isCompleted: isCompleted});
              
              return Scheduler.Event.QUIT;
            }
