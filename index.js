'use strict';

//version number
let version = '1.0.7 Beta';

//import ask-sdk-core
const Alexa = require('ask-sdk-core');
//import ask-sdk-runtime
const Runtime = require('ask-sdk-runtime');

//skill name 
const appName = 'BYU Idaho';

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
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'ErefundIntent';
  },
  handle(handlerInput) {
    let speechText = "You can find out all the information you need on the financial aid website.";
    let displayText = "www.byui.edu/financial-services";
    let nextPrompt = 'What else can I help you with?';

    //there are no slots for this handler.
    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();
  }
};


const RegistrationDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'RegistrationDateIntent';
  },
  handle(handlerInput) {

    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.semester.value;
    let SemesterType = intent.slots.semesterType.value;

    let date = '2019';
    let winterregistrationDeadlinesFirst = 'January 14'; 
    let winterregistrationDeadlinesSecond = "March 6";
    let springRegistrationDeadlinesFirst = "April 29";
    let springRegistrationDeadlinesSecond = "June 13";
    let summerRegistrationDeadlines = "August 5";
    let fallRegistrationDeadlinesFirst = "September 23";
    let fallRegistrationDeadlinesSecond = "November 6";
    
    //logic for this handler
    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester the registration deadline is ' + winterregistrationDeadlinesFirst;
        let displayText = date + 'Registration deadline is ' + winterregistrationDeadlinesFirst;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'First Block' || SemesterType === 'First') {
        //logic for First Block
        let speechText = 'The First Block of winter ' + date + ' Semester registation deadline is ' + winterregistrationDeadlinesFirst;
        let displayText = date + 'The First Block registation deadline is ' + winterregistrationDeadlinesFirst;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
        //logic for second Block
      let speechText = 'The second Block of winter ' + date + ' Semester registration deadline is ' + winterregistrationDeadlinesSecond;
      let displayText = date + 'The Second Block registration deadline is ' + winterregistrationDeadlinesSecond;
      let nextPrompt = 'What else can I help you with?';

      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(nextPrompt)
      .withSimpleCard(appName, displayText)
      .getResponse();


    } else {
      let speechText = "I'm sorry, I didn't get that."
      let displayText = "Sorry, I didn't get that."

      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(nextPrompt)
      .withSimpleCard(appName, displayText)
      .getResponse();

    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For spring ' + date + ' Semester the registration deadline is ' + springRegistrationDeadlinesFirst;
         let displayText = 'Registration deadline is ' + springRegistrationDeadlinesFirst;
         let nextPrompt = 'What else can I help you with?';

          return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block of spring ' + date + ' Semester registation deadline is ' + springRegistrationDeadlinesFirst;
         let displayText = 'The First Block registation deadline is ' + springRegistrationDeadlinesFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block of spring ' + date + ' Semester registration deadline is ' + springRegistrationDeadlinesSecond;
       let displayText = 'The Second Block registration deadline is ' + springRegistrationDeadlinesSecond;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
       .getResponse();


     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session the registration deadline is ' + summerRegistrationDeadlines;
         let displayText = 'Registration deadline is ' + summerRegistrationDeadlines;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();

       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester the registration deadline is ' + fallRegistrationDeadlinesFirst;
         let displayText = 'Registration deadline is ' + fallRegistrationDeadlinesFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block of fall ' + date + ' Semester registation deadline is ' + fallRegistrationDeadlinesFirst;
         let displayText = 'The First Block registation deadline is ' + fallRegistrationDeadlinesFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block of fall ' + date + ' Semester registration deadline is ' + fallRegistrationDeadlinesSecond;
       let displayText = 'The Second Block registration deadline is ' + fallRegistrationDeadlinesSecond;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
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



const HousingHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'HousingIntent';
  },

  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let maritalStatus = intent.slots.MaritalStatus.value;

    if (maritalStatus === 'single') {
      //perfrom operation for single
      let speechText = 'You can search for approved housing at www.byui.edu/housing';
      let displayText = 'More information at www.byui.edu/housing';
      let nextPrompt = 'What else can I help you with?';

      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(nextPrompt)
      .withSimpleCard(appName, displayText)
      .getResponse();


    }
     else if (maritalStatus === 'married') {
      //perform logic for married
      let speechText = 'Since you are married you don\'t need to worry about approved housing. However, you can find more information at www.byui.edu/housing';
      let displayText = 'More information at www.byui.edu/housing';
      let nextPrompt = 'What else can I help you with?';

      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(nextPrompt)
      .withSimpleCard(appName, displayText)
      .getResponse();


    } else {
      //ask for the required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
};


const ActivitiesHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent';
  },

  handle(handlerInput) {
    let speechText = 'There are lots of activities that you can find at www.byui.edu/activities';
    let displayText = 'look up www.byui.edu/activities';
    let nextPrompt = 'What else can I help you with?';
    

    return handlerInput.responseBuilder
    .speak(speechText)
    .reprompt(nextPrompt)
    .withSimpleCard(appName, displayText)
    .getResponse();

  }
};



const MoveInDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'MoveInDateIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.semester.value;
    let SemesterType = intent.slots.semesterType.value;

    let date = '2019';
    let winterMoveInDateFirst = 'January 4';
    let winterMoveInDateSecond = 'Febuary 26'
    let springMoveInDateFirst = 'April 19';
    let springMoveInDateSecond = 'June 5';
    let summerMoveInDate = 'July 27';
    let fallMoveInDateFirst = 'September 13';
    let fallMoveInDateSecond = 'October 29';

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester the move in date is ' + winterMoveInDateFirst;
        let displayText = 'The move-in date is ' + winterMoveInDateFirst;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'First Block' || SemesterType === 'First') {
        //logic for First Block
        let speechText = 'The First Block move in date is ' + winterMoveInDateFirst;
        let displayText = 'The move-in date is ' + winterMoveInDateFirst;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
        //logic for second Block
      let speechText = 'The Second Block move in date is ' + winterMoveInDateSecond;
      let displayText = 'The move-in date is ' + winterMoveInDateSecond;
      let nextPrompt = 'What else can I help you with?';

      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(nextPrompt)
      .withSimpleCard(appName, displayText)
      .getResponse();

      } else {
          return handlerInput.responseBuilder
          .assDelegateDirective(intent)
          .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For Spring ' + date + ' Semester the move in date is ' + springMoveInDateFirst;
         let displayText = 'The move-in date is ' + springMoveInDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block move in date is ' + springMoveInDateFirst;
         let displayText = 'The move-in date is ' + springMoveInDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block move in date is ' + springMoveInDateSecond;
       let displayText = 'The move-in date is ' + springMoveInDateSecond;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
       .getResponse();


     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session move in date is ' + summerMoveInDate;
         let displayText = 'The move-in date is ' + summerMoveInDate;
         let nextPrompt = 'What else can I help you with?';
         
         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 

       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
       if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester the move in date is ' + fallMoveInDateFirst;
         let displayText = 'The move-in date is ' + fallMoveInDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block move in date is ' + fallMoveInDateFirst;
         let displayText = 'The move-in date is ' + fallMoveInDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block move in date is ' + fallMoveInDateSecond;
       let displayText = 'The move-in date is ' + fallMoveInDateSecond;
       let nextPrompt = 'What else can I help you with?';

 return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
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


const FirstDayOfClassHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'FirstDayOfClassIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.semester.value;
    let SemesterType = intent.slots.semesterType.value;

    let date = '2019';
    let winterFirstDayFirst = 'January 7';
    let winterFirstDaySecond = 'Febuary 27';
    let springFirstDayFirst = 'April 22';
    let springFirstDaySecond = 'June 6';
    let summerFirstDay = 'July 29';
    let fallFirstDayFirst = 'September 16';
    let fallFirstDaySecond = 'October 30';
    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester the First day of classes is ' + winterFirstDayFirst;
        let displayText = 'The First day of classes begin ' + winterFirstDayFirst;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'First Block' || SemesterType === 'First') {
        //logic for First Block
        let speechText = 'First Block classes begin ' + winterFirstDayFirst;
        let displayText = 'The First day of classes begin ' + winterFirstDayFirst;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
        //logic for second Block
      let speechText = 'Second Block classes begin ' + winterFirstDaySecond;
      let displayText = 'The First day of classes begin ' + winterFirstDaySecond;
      let nextPrompt = 'What else can I help you with?';

      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(nextPrompt)
      .withSimpleCard(appName, displayText)
      .getResponse();


    } else {
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For Spring ' + date + ' Semester First day of classes is ' + springFirstDayFirst;
         let displayText = 'The First day of classes begin ' + springFirstDayFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'First Block classes begin ' + springFirstDayFirst;
         let displayText = 'The First day of classes begin ' + springFirstDayFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'Second Block classes begin ' + springFirstDaySecond;
       let displayText = 'The First day of classes begin ' + springFirstDaySecond;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
       .getResponse();


     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session classes begin ' + summerFirstDay;
         let displayText = 'The First day of classes begin ' + summerFirstDay;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
        
       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester classes begin ' + fallFirstDayFirst;
         let displayText = 'The First day of classes begin ' + fallFirstDayFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block classes begin ' + fallFirstDayFirst;
         let displayText = 'The First day of classes begin ' + fallFirstDayFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block classes begin ' + fallFirstDaySecond;
       let displayText = 'The First day of classes begin ' + fallFirstDaySecond;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
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


const DropClassDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'DropClassDateIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.semester.value;
    let SemesterType = intent.slots.semesterType.value;

    let date = '2019';
    let winterDropDateFirst = 'January 29';
    let winterDropDateSecond = 'January 22';
    let winterDropDateThird = 'March 14';
    let springDropDateFirst = 'May 14';
    let springDropDateSecond = 'May 7';
    let springDropDateThird = 'June 21';
    let summerDropDate = 'Aug 13';
    let fallDropDateFirst = 'October 8';
    let fallDropDateSecond = 'October 1';
    let fallDropDateThird = 'November 14';

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester deadline to drop classes is ' + winterDropDateFirst;
        let displayText = 'The deadline to drop classes is ' + winterDropDateFirst;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'First Block' || SemesterType === 'First') {
        //logic for First Block
        let speechText = 'The First Block deadline to drop classes is ' + winterDropDateSecond;
        let displayText = 'The deadline to drop classes is ' + winterDropDateSecond;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
        //logic for second Block
      let speechText = 'The Second Block deadline to drop classes is ' + winterDropDateThird;
      let displayText = 'The deadline to drop classes is ' + winterDropDateThird;
      let nextPrompt = 'What else can I help you with?';

      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(nextPrompt)
      .withSimpleCard(appName, displayText)
      .getResponse();


    } else {
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For Spring ' + date + ' Semester deadline to drop classes is ' + springDropDateFirst;
         let displayText = 'The deadline to drop classes is ' + springDropDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block deadline to drop classes is ' + springDropDateSecond;
         let displayText = 'The deadline to drop classes is ' + springDropDateSecond;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block deadline to drop classes is ' + springDropDateThird;
       let displayText = 'The deadline to drop classes is ' + springDropDateThird;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
       .getResponse();


     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session deadline to drop classes is ' + summerDropDate;
         let displayText = 'The deadline to drop classes is ' + summerDropDate;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 

       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester deadline to drop classes is ' + fallDropDateFirst;
         let displayText = 'The deadline to drop classes is ' + fallDropDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block deadline to drop classes is ' + fallDropDateSecond;
         let displayText = 'The deadline to drop classes is ' + fallDropDateSecond;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block deadline to drop classes is ' + fallDropDateThird;
       let displayText = 'The deadline to drop classes is ' + fallDropDateThird;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
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


const WithdrawDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'WithdrawDateIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.semester.value;
    let SemesterType = intent.slots.semesterType.value;

    let date = '2019';
    let winterWithdrawDateFirst = 'March 4';
    let winterWithdrawDateSecond = 'Febuary 4';
    let winterWithdrawDateThird = 'March 25';
    let springWithdrawDateFirst = 'June 17';
    let springWithdrawDateSecond = 'May 22';
    let springWithdrawDateThird = 'July 2';
    let summerWithdrawDate = 'August 26';
    let fallWithdrawDateFirst = 'November 11';
    let fallWithdrawDateSecond = 'October 14';
    let fallWithdrawDateThird = 'November 25';

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
        //logic for Full Semester
        let speechText = 'For winter ' + date + ' Semester deadline to withdraw from classes is ' + winterWithdrawDateFirst;
        let displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDateFirst;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'First Block' || SemesterType === 'First') {
        //logic for First Block
        let speechText = 'The First Block deadline to withdraw from classes is ' + winterWithdrawDateSecond;
        let displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDateSecond;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

      }
      else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
        //logic for second Block
      let speechText = 'The Second Block deadline to withdraw from classes is ' + winterWithdrawDateThird;
      let displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDateThird;
      let nextPrompt = 'What else can I help you with?';

      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(nextPrompt)
      .withSimpleCard(appName, displayText)
      .getResponse();


    } else {
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
    }
  }
    else if (Semester === 'spring') {
//logic for Spring
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For Spring ' + date + ' Semester deadline to withdraw from classes is ' + springWithdrawDateFirst;
         let displayText = 'The deadline to withdraw from classes is ' + springWithdrawDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block deadline to withdraw from classes is ' + springWithdrawDateSecond;
         let displayText = 'The deadline to withdraw from classes is ' + springWithdrawDateSecond;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block deadline to withdraw from classes is ' + springWithdrawDateThird;
       let displayText = 'The deadline to withdraw from classes is ' + springWithdrawDateThird;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
       .getResponse();


     } else {
       return handlerInput.responseBuilder
       .assDelegateDirective(intent)
       .getResponse();
     }
    }
    else if (Semester === 'summer'){
      //logic for Summer
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For summer ' + date + ' session deadline to withdraw from classes is ' + summerWithdrawDateFirst;
         let displayText = 'The deadline to withdraw from classes is ' + summerWithdrawDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 

       } else {
         return handlerInput.responseBuilder
         .assDelegateDirective(intent)
         .getResponse();
       }
    }
    else if (Semester === 'fall') {
      //logic for fall
      if (SemesterType === 'Full Semester' || SemesterType === 'Full') {
         //logic for Full Semester
         let speechText = 'For fall ' + date + ' Semester deadline to withdraw from classes is ' + fallWithdrawDateFirst;
         let displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDateFirst;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'First Block' || SemesterType === 'First') {
         //logic for First Block
         let speechText = 'The First Block deadline to withdraw from classes is ' + fallWithdrawDateSecond;
         let displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDateSecond;

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       }
       else if (SemesterType === 'Second Block' || SemesterType === 'Second') {
         //logic for second Block
       let speechText = 'The second Block deadline to withdraw from classes is ' + fallWithdrawDateThird;
       let displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDateThird;
       let nextPrompt = 'What else can I help you with?';

       return handlerInput.responseBuilder
       .speak(speechText)
       .reprompt(nextPrompt)
       .withSimpleCard(appName, displayText)
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


const GraduationDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'GraduationDateIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.semester.value;

    let date = '2019';
    let winterGradDate = 'April 12';
    let springGradDate = 'July 23';
    let fallGradDate = 'December 18';


    if (Semester === 'winter') {
//logic for winter
        let speechText = 'Winter ' + date + ' graduation is ' + winterGradDate;
        let displayText = 'Graduation is ' + winterGradDate;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

    } 
    else if (Semester === 'spring') {
//logic for Spring
         let speechText = 'Spring ' + date + ' graduation is ' + springGradDate;
         let displayText = 'Graduation is ' + springGradDate;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
     }
    else if (Semester === 'fall') {
      //logic for fall
         let speechText = 'Fall ' + date + ' graduation is ' + fallGradDate;
         let displayText = 'Graduation is ' + fallGradDate;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 

     } else {
      //ask for required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
   }
  }
};


const CommencementDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'CommencementDateIntent';
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.semester.value;
    

    let date = '2019';
    let winterCommDate = 'April 12';
    let springCommDate = 'July 23';
    let fallCommDate = 'December 18';
    if (Semester === 'winter') {
//logic for winter
        let speechText = 'Winter ' + date + ' commencement is ' + winterCommDate;
        let displayText = 'Commencement ' + date + ' is ' + winterCommDate;
        let nextPrompt = 'What else can I help you with?';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

    } 
    else if (Semester === 'spring') {
//logic for Spring
         let speechText = 'Spring ' + date + ' Commencement is ' + springCommDate;
         let displayText = 'Commencement ' + date + ' is ' + springCommDate;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
     }
    else if (Semester === 'summer'){
      //logic for Summer
         let speechText = 'Summer ' + date + ' session does not have a Commencement ceremony.';
         let displayText = 'Summer ' + date + ' session does not have a Commencement ceremony.';
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
       } 
    else if (Semester === 'fall') {
      //logic for fall
         let speechText = 'Fall ' + date + ' Commencement is ' + fallCommDate;
         let displayText = 'Commencement ' + date + ' is ' + fallCommDate;
         let nextPrompt = 'What else can I help you with?';

         return handlerInput.responseBuilder
         .speak(speechText)
         .reprompt(nextPrompt)
         .withSimpleCard(appName, displayText)
         .getResponse();
 
        
     } else {
      //ask for required input
      return handlerInput.responseBuilder
      .assDelegateDirective(intent)
      .getResponse();
   }
  }
};



const HowToRegisterHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'HowToRegisterIntent';
  },
  handle(handlerInput) {
    let speechText = 'You can register for classes, depending on your credit count, in your my byui portal under the student tab.';
    let displayText = 'go to my.byui.edu, log in, and access the student tab.';
    let nextPrompt = 'What else can I help you with?';
    
 return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(nextPrompt)
        .withSimpleCard(appName, displayText)
        .getResponse();

  }
};
//end custom handlers


//Built in handlers
const HelpIntentRequest = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        //help text for your skill
        let speechText = 'more information can be found at www.b.y.u.i.e.d.u/byu-idaho-resources';
        let displayText = 'www.byui.edu/byu-idaho-resources';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText, displayText)
            .withSimpleCard(appName, speechText)
            .getResponse();
    }
};

const CancelAndStopIntentRequest = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        let speechText = 'Thank you for using B.Y.U. Idaho\'s personal assistant';
        let displayText = 'Thank you, Goodbye';
        return handlerInput.responseBuilder
            .speak(speechText, displayText)
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
                         HelpIntentRequest,
                         CancelAndStopIntentRequest,
                         SessionEndedRequestHandler).lambda();
