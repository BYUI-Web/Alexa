'use strict';

//version number
let version = '1.8 Beta';

//import ask-sdk-core
const Alexa = require('ask-sdk-core');

//skill name 
const appName = 'BYU Idaho';

// something

//code for intent handlers
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    //welcome message
    let speechText = "Welcome to BYU Idaho's personal assistant. I can help you find basic information \
                      about campus, your classes, or activities. What would you like me to help you with?";
    //welcome screeen message
    let displayText = "I'm your personal assistant for BYU-Idaho";
    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard(appName, displayText)
        .getResponse();
  }
};

//custom handlers
const ERefundHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ErefundIntent';
  },
  handle(handlerInput) {
    let speechText = 'You can find out all the information you need on the financial aid website.';
    let displayText = 'www.byui.edu/financial-services';
    let intent = handlerInput.requestEnvelope.request.intent;
    //there are no slots for this handler.
    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard(appName, displayText)
        .getResponse();
  }
};

//checked for bracket inconsistencies
const RegistrationDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'RegistrationIntent';
  },
  handle(handlerInput) {

    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intnet.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let date = '2019';
    let winterregistrationDeadlines = ["January 14", "March 6"];
    let springRegistrationDeadlines = ["April 29", "June 13"];
    let summerRegistrationDeadlines = ["August 5"];
    let fallRegistrationDeadlines = ["September 23", "November 6"];
    
    //logic for this handler
    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester the registration deadline is ' + winterregistrationDeadlines[0];
        let displayText = 'Registration deadline is ' + winterregistrationDeadlines[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        let speechText = 'The First Block of winter ' + date + ' Semester registation deadline is ' + winterregistrationDeadlines[0];
        let displayText = 'The First Block registation deadline is ' + winterregistrationDeadlines[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'Second Block') {
        //logic for second Block
      let speechText = 'The second Block of winter ' + date + ' Semester registration deadline is ' + winterregistrationDeadlines[1];
      let displayText = 'The Second Block registration deadline is ' + winterregistrationDeadlines[1];

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

    } else {
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For spring ' + date + ' Semester the registration deadline is ' + springRegistrationDeadlines[0];
         let displayText = 'Registration deadline is ' + springRegistrationDeadlines[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block of spring ' + date + ' Semester registation deadline is ' + springRegistrationDeadlines[0];
         let displayText = 'The First Block registation deadline is ' + springRegistrationDeadlines[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block of spring ' + date + ' Semester registration deadline is ' + springRegistrationDeadlines[1];
       let displayText = 'The Second Block registration deadline is ' + springRegistrationDeadlines[1];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session the registration deadline is ' + summerRegistrationDeadlines[0];
         let displayText = 'Registration deadline is ' + summerRegistrationDeadlines;

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester the registration deadline is ' + fallRegistrationDeadlines[0];
         let displayText = 'Registration deadline is ' + fallRegistrationDeadlines[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block of fall ' + date + ' Semester registation deadline is ' + fallRegistrationDeadlines[0];
         let displayText = 'The First Block registation deadline is ' + fallRegistrationDeadlines[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block of fall ' + date + ' Semester registration deadline is ' + fallRegistrationDeadlines[1];
       let displayText = 'The Second Block registration deadline is ' + fallRegistrationDeadlines[1];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
     } else {
      //ask for required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
   }
  }
};


//Checked for bracket inconsistencies
const HousingHandler = {
  canHandle(hanlderInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'HousingIntent';
  },

  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let maritalStatus = intent.slots.MaritalStatus.value;

    if (maritalStatus === 'single') {
      //perfrom operation for single
      let speechText = 'You can search for approved housing at www.byui.edu/housing';
      let displayText = 'go to www.byui.edu/housing';

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
    }
     else if (maritalStatus === 'married') {
      //perform logic for married
      let speechText = 'Since you are married you don\'t need to worry about approved housing.';
      let displayText = 'You don\'t need to worry about approved housing.';

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
    } else {
      //ask for the required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
};

//checked for bracket inconsistencies
const ActivitiesHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },

  handle(handlerInput) {
    let speechText = 'There are lots of activites that you can find at www.byui.edu/activities';
    let displayText = 'look up www.byui.edu/activities';
    let intent = handlerInput.requestEnvelope.request.intent;

    return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
  }
};


//Checked for bracket inconsistencies
const MoveInDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let date = '2019';
    let winterMoveInDate = ['January 4', 'Febuary 26'];
    let springMoveInDate = ['April 19', 'June 5'];
    let summerMoveInDate = ['July 27'];
    let fallMoveInDate = ['September 13', 'October 29'];

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester the move in date is ' + winterMoveInDate[0];
        let displayText = 'The move-in date is ' + winterMoveInDate[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        let speechText = 'The First Block move in date is ' + winterMoveInDate[0];
        let displayText = 'The move-in date is ' + winterMoveInDate[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'second Block') {
        //logic for second Block
      let speechText = 'The Second Block move in date is ' + winterMoveInDate[1];
      let displayText = 'The move-in date is ' + winterMoveInDate[1];

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      } else {
          return handlerInput.responseBuilder
          .assDelegateDirective(intent)
          .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For Spring ' + date + ' Semester the move in date is ' + springMoveInDate[0];
         let displayText = 'The move-in date is ' + springMoveInDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block move in date is ' + springMoveInDate[0];
         let displayText = 'The move-in date is ' + springMoveInDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block move in date is ' + springMoveInDate[1];
       let displayText = 'The move-in date is ' + springMoveInDate[1];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session move in date is ' + summerMoveInDate[0];
         let displayText = 'The move-in date is ' + summerMoveInDate[0];
         
         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
       if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester the move in date is ' + fallMoveInDate[0];
         let displayText = 'The move-in date is ' + fallMoveInDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block move in date is ' + fallMoveInDate[0];
         let displayText = 'The move-in date is ' + fallMoveInDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block move in date is ' + fallMoveInDate[1];
       let displayText = 'The move-in date is ' + fallMoveInDate[1];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

       } else {
         //ask for required input
           return handlerInput.responseBuilder
           .assDelegateDirective(intent)
           .getResponse();
   }
  }
 }
};

//checked for inconsistencies
const FirstDayOfClassHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let date = '2019';
    let winterFirstDay = ['January 7', 'Febuary 27'];
    let springFirstDay = ['April 22', 'June 6'];
    let summerFirstDay = ['July 29'];
    let fallFirstDay = ['September 16', 'October 30'];
    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester the First day of classes is ' + winterFirstDay[0];
        let displayText = 'The First day of classes begin ' + winterFirstDay[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        let speechText = 'First Block classes begin ' + winterFirstDay[0];
        let displayText = 'The First day of classes begin ' + winterFirstDay[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'second Block') {
        //logic for second Block
      let speechText = 'Second Block classes begin ' + winterFirstDay[1];
      let displayText = 'The First day of classes begin ' + winterFirstDay[1];

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

    } else {
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For Spring ' + date + ' Semester First day of classes is ' + springFirstDay[0];
         let displayText = 'The First day of classes begin ' + springFirstDay[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'First Block classes begin ' + springFirstDay[0];
         let displayText = 'The First day of classes begin ' + springFirstDay[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'Second Block classes begin ' + springFirstDay[1];
       let displayText = 'The First day of classes begin ' + springFirstDay[1];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session classes begin ' + summerFirstDay[0];
         let displayText = 'The First day of classes begin ' + summerFirstDay[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
        
       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester classes begin ' + fallFirstDay[0];
         let displayText = 'The First day of classes begin ' + fallFirstDay[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block classes begin ' + fallFirstDay[0];
         let displayText = 'The First day of classes begin ' + fallFirstDay[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block classes begin ' + fallFirstDay[1];
       let displayText = 'The First day of classes begin ' + fallFirstDay[1];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
     } else {
      //ask for required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
   }
  }
 }
};

//checked for inconsistencies
const DropClassDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let date = '2019';
    let winterDropDate = ['January 29', 'January 22', 'March 14'];
    let springDropDate = ['May 14', 'May 7', 'June 21'];
    let summerDropDate = ['Aug 13'];
    let fallDropDate = ['October 8', 'October 1', 'November 14'];

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester deadline to drop classes is ' + winterDropDate[0];
        let displayText = 'The deadline to drop classes is ' + winterDropDate[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        let speechText = 'The First Block deadline to drop classes is ' + winterDropDate[1];
        let displayText = 'The deadline to drop classes is ' + winterDropDate[1];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'second Block') {
        //logic for second Block
      let speechText = 'The Second Block deadline to drop classes is ' + winterDropDate[2];
      let displayText = 'The deadline to drop classes is ' + winterDropDate[2];

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

    } else {
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For Spring ' + date + ' Semester deadline to drop classes is ' + springDropDate[0];
         let displayText = 'The deadline to drop classes is ' + springDropDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block deadline to drop classes is ' + springDropDate[1];
         let displayText = 'The deadline to drop classes is ' + springDropDate[1];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block deadline to drop classes is ' + springDropDate[2];
       let displayText = 'The deadline to drop classes is ' + springDropDate[2];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session deadline to drop classes is ' + summerDropDate[0];
         let displayText = 'The deadline to drop classes is ' + summerDropDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester deadline to drop classes is ' + fallDropDate[0];
         let displayText = 'The deadline to drop classes is ' + fallDropDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block deadline to drop classes is ' + fallDropDate[1];
         let displayText = 'The deadline to drop classes is ' + fallDropDate[1];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block deadline to drop classes is ' + fallDropDate[2];
       let displayText = 'The deadline to drop classes is ' + fallDropDate[2];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

     } else {
      //ask for required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
   }
  }
 }
};

//checked for inconsistencies
const WithdrawDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let date = '2019';
    let winterWithdrawDate = ['March 4', 'Febuary 4', 'March 25'];
    let springWithdrawDate = ['June 17', 'May 22', 'July 2'];
    let summerWithdrawDate = ['August 26'];
    let fallWithdrawDate = ['November 11', 'October 14', 'November 25'];

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester deadline to withdraw from classes is ' + winterWithdrawDate[0];
        let displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDate[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        let speechText = 'The First Block deadline to withdraw from classes is ' + winterWithdrawDate[1];
        let displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDate[1];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
      }
      else if (SemesterType === 'second Block') {
        //logic for second Block
      let speechText = 'The Second Block deadline to withdraw from classes is ' + winterWithdrawDate[2];
      let displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDate[2];

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

    } else {
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For Spring ' + date + ' Semester deadline to withdraw from classes is ' + springWithdrawDate[0];
         let displayText = 'The deadline to withdraw from classes is ' + springWithdrawDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block deadline to withdraw from classes is ' + springWithdrawDate[1];
         let displayText = 'The deadline to withdraw from classes is ' + springWithdrawDate[1];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block deadline to withdraw from classes is ' + springWithdrawDate[2];
       let displayText = 'The deadline to withdraw from classes is ' + springWithdrawDate[2];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session deadline to withdraw from classes is ' + summerWithdrawDate[0];
         let displayText = 'The deadline to withdraw from classes is ' + summerWithdrawDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
      if (SemesterType === 'Full Semester') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester deadline to withdraw from classes is ' + fallWithdrawDate[0];
         let displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         let speechText = 'The First Block deadline to withdraw from classes is ' + fallWithdrawDate[1];
         let displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDate[1];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       let speechText = 'The second Block deadline to withdraw from classes is ' + fallWithdrawDate[2];
       let displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDate[2];

       return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

     } else {
      //ask for required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
   }
  }
 }
};

//checked for bracket inconsistencies
const GraduationDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let date = '2019';
    let winterGradDate = ['April 12'];
    let springGradDate = ['July 23'];
    let fallGradDate = ['December 18'];
    if (Semester === 'winter') {
//logic for winter
        let speechText = 'Winter ' + date + ' graduation is ' + winterGradDate[0];
        let displayText = 'Graduation is ' + winterGradDate[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
    } 
    else if (Semester === 'spring') {
//logic for Spring
         let speechText = 'Spring ' + date + ' graduation is ' + springGradDate[0];
         let displayText = 'Graduation is ' + springGradDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
     }
    else if (Semester === 'fall') {
      //logic for fall
         let speechText = 'Fall ' + date + ' graduation is ' + fallGradDate[0];
         let displayText = 'Graduation is ' + fallGradDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();

     } else {
      //ask for required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
   }
  }
};

//checked for bracket inconsistencies
const CommencementDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    

    let date = '2019';
    let winterCommDate = ['April 12'];
    let springCommDate = ['July 23'];
    let fallCommDate = ['December 18'];
    if (Semester === 'winter') {
//logic for winter
        let speechText = 'Winter ' + date + ' commencement is ' + winterCommDate[0];
        let displayText = 'Commencement ' + date + ' is ' + winterCommDate[0];

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
    } 
    else if (Semester === 'spring') {
//logic for Spring
         let speechText = 'Spring ' + date + ' Commencement is ' + springCommDate[0];
         let displayText = 'Commencement ' + date + ' is ' + springCommDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
     }
    else if (Semester === 'summer'){
      //logic for Summer
         let speechText = 'Summer ' + date + ' session does not have a Commencement ceremony.';
         let displayText = 'Summer ' + date + ' session does not have a Commencement ceremony.';

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
       } 
    else if (Semester === 'fall') {
      //logic for fall
         let speechText = 'Fall ' + date + ' Commencement is ' + fallCommDate[0];
         let displayText = 'Commencement ' + date + ' is ' + fallCommDate[0];

         return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
        
     } else {
      //ask for required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
   }
  }
};


//checked for bracket inconsistencies
const HowToRegisterHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },
  handle(handlerInput) {
    let speechText = 'You can register for classes, depending on your credit count, in your my byui portal under the student tab.';
    let displayText = 'go to my.byui.edu, log in, and access the student tab.';
    let intent = handlerInput.requestEnvelope.request.intent;
    
      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(appName, displayText)
        .withShouldEndSession(true)
        .getResponse();
  }
};
//end custom handlers


//Built in handlers
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        //help text for your skill
        let speechText = '';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(appName, speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        let speechText = 'Goodbye';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        //any cleanup logic goes here
        return handlerInput.responseBuilder.getResponse();
    }
};

//Lambda handler function
//Remember to add custom request handlers here
exports.handler = Alexa.SkillBuilders.custom()
     .addRequestHandlers(LaunchRequestHandler,
                         ERefundHandler,
                         RegistrationDateHandler,
                         HousingHandler,
                         ActivitiesHandler,
                         MoveInDateHandler,
                         FirstDayOfClassHandler,
                         DropClassDateHandler,
                         WithdrawDateHandler,
                         GraduationDateHandler,
                         CommencementDateHandler,
                         HowToRegisterHandler,
                         HelpIntentHandler,
                         CancelAndStopIntentHandler,
                         SessionEndedRequestHandler).lambda();
