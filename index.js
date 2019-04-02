'use strict';

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
    let displayText = ""
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
        && handlerInput.requestEnvelope.request.intent.name === 'ErefundIntent'
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    //there are no slots for this handler.
  }
};

//checked for bracket inconsistencies
const RegistrationDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'RegistrationIntent'
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intnet.slots.Semester.value;
    let SemesterType = intent.slots.Semester.value;


    let winterregistrationDeadlines = ["January 14", "March 6"];
    let springRegistrationDeadlines = ["April 29", "June 13"];
    let summerRegistrationDeadlines = ["August 5"];
    let fallRegistrationDeadlines = ["September 23", "November 6"];
    //logic for this handler
    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        speechText = 'For winter Semester the registration deadline is ' + winterregistrationDeadlines[0];
        displayText = 'Registration deadline is ' + winterregistrationDeadlines[0];
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        speechText = 'The First Block of winter Semester registation deadline is ' + winterregistrationDeadlines[0];
        displayText = 'The First Block registation deadline is ' + winterregistrationDeadlines[0];
      }
      else if (SemesterType === 'Second Block') {
        //logic for second Block
      speechText = 'The second Block of winter Semester registration deadline is ' + winterregistrationDeadlines[1];
      displayText = 'The Second Block registration deadline is ' + winterregistrationDeadlines[1];
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
         speechText = 'For spring Semester the registration deadline is ' + springRegistrationDeadlines[0];
         displayText = 'Registration deadline is ' + springRegistrationDeadlines[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block of spring Semester registation deadline is ' + springRegistrationDeadlines[0];
         displayText = 'The First Block registation deadline is ' + springRegistrationDeadlines[0];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block of spring Semester registration deadline is ' + springRegistrationDeadlines[1];
       displayText = 'The Second Block registration deadline is ' + springRegistrationDeadlines[1];
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
         speechText = 'For summer session the registration deadline is ' + summerRegistrationDeadlines[0];
         displayText = 'Registration deadline is ' + summerRegistrationDeadlines;
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
         speechText = 'For fall Semester the registration deadline is ' + fallRegistrationDeadlines[0];
         displayText = 'Registration deadline is ' + fallRegistrationDeadlines[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block of fall Semester registation deadline is ' + fallRegistrationDeadlines[0];
         displayText = 'The First Block registation deadline is ' + fallRegistrationDeadlines[0];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block of fall Semester registration deadline is ' + fallRegistrationDeadlines[1];
       displayText = 'The Second Block registration deadline is ' + fallRegistrationDeadlines[1];
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
        && handlerInput.requestEnvelope.request.intent.name === 'HousingIntent'
  },

  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let maritalStatus = intent.slots.MaritalStatus.value;

    if (maritalStatus === 'single') {
      //perfrom operation for single
      speechText = 'Well if you are single, there are pleanty of fish in the sea. However, you can search for approved housing at www.byui.edu/housing';
      displayText = 'go to www.byui.edu/housing';
    }
     else if (maritalStatus === 'married') {
      //perform logic for married
      speechText = 'Congratulations! you got married! I gess thats why they call it BYU I Do! Anyways, since you are married you don\'t need to worry about approved housing.';
      displayText = 'you don\'t need to worry about approved housing.';
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
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent'
  },

  handle(handlerInput) {
    let speechText = 'There are lots of activites that you can find at www.byui.edu/activities';
    let displayText = 'look up www.byui.edu/activities';
    let intent = handlerInput.requestEnvelope.request.intent;
  }
};


//Checked for bracket inconsistencies
const MoveInDateHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentHandler'
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent'
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;


    let winterMoveInDate = ['January 4', 'Febuary 26'];
    let springMoveInDate = ['April 19', 'June 5'];
    let summerMoveInDate = ['July 27'];
    let fallMoveInDate = ['September 13', 'October 29'];

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        speechText = 'For winter Semester the move in date is ' + winterMoveInDate[0];
        displayText = 'The move-in date is ' + winterMoveInDate[0];
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        speechText = 'The First Block move in date is ' + winterMoveInDate[0];
        displayText = 'The move-in date is ' + winterMoveInDate[0];
      }
      else if (SemesterType === 'second Block') {
        //logic for second Block
      speechText = 'The Second Block move in date is ' + winterMoveInDate[1];
      displayText = 'The move-in date is ' + winterMoveInDate[1];
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
         speechText = 'For Spring Semester the move in date is ' + springMoveInDate[0];
         displayText = 'The move-in date is ' + springMoveInDate[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block move in date is ' + springMoveInDate[0];
         displayText = 'The move-in date is ' + springMoveInDate[0];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block move in date is ' + springMoveInDate[1];
       displayText = 'The move-in date is ' + springMoveInDate[1];
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
         speechText = 'For summer session move in date is ' + summerMoveInDate[0];
         displayText = 'The move-in date is ' + summerMoveInDate[0];
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
         speechText = 'For fall Semester the move in date is ' + fallMoveInDate[0];
         displayText = 'The move-in date is ' + fallMoveInDate[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block move in date is ' + fallMoveInDate[0];
         displayText = 'The move-in date is ' + fallMoveInDate[0];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block move in date is ' + fallMoveInDate[1];
       displayText = 'The move-in date is ' + fallMoveInDate[1];
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
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent'
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let winterFirstDay = ['January 7', 'Febuary 27'];
    let springFirstDay = ['April 22', 'June 6'];
    let summerFirstDay = ['July 29'];
    let fallFirstDay = ['September 16', 'October 30'];
    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        speechText = 'For winter Semester the First day of classes is ' + winterFirstDay[0];
        displayText = 'The First day of classes begin ' + winterFirstDay[0];
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        speechText = 'First Block classes begin ' + winterFirstDay[0];
        displayText = 'The First day of classes begin ' + winterFirstDay[0];
      }
      else if (SemesterType === 'second Block') {
        //logic for second Block
      speechText = 'Second Block classes begin ' + winterFirstDay[1];
      displayText = 'The First day of classes begin ' + winterFirstDay[1];
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
         speechText = 'For Spring Semester First day of classes is ' + springFirstDay[0];
         displayText = 'The First day of classes begin ' + springFirstDay[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'First Block classes begin ' + springFirstDay[0];
         displayText = 'The First day of classes begin ' + springFirstDay[0];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'Second Block classes begin ' + springMoveInDate[1];
       displayText = 'The First day of classes begin ' + springMoveInDate[1];
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
         speechText = 'For summer session classes begin ' + summerFirstDay[0];
         displayText = 'The First day of classes begin ' + summerFirstDay[0];
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
         speechText = 'For fall Semester classes begin ' + fallFirstDay[0];
         displayText = 'The First day of classes begin ' + fallFirstDay[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block classes begin ' + fallFirstDay[0];
         displayText = 'The First day of classes begin ' + fallFirstDay[0];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block classes begin ' + fallFirstDay[1];
       displayText = 'The First day of classes begin ' + fallFirstDay[1];
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
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent'
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let winterDropDate = ['January 29', 'January 22', 'March 14'];
    let springDropDate = ['May 14', 'May 7', 'June 21'];
    let summerDropDate = ['Aug 13'];
    let fallDropDate = ['October 8', 'October 1', 'November 14'];

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        speechText = 'For winter Semester deadline to drop classes is ' + winterDropDate[0];
        displayText = 'The deadline to drop classes is ' + winterDropDate[0];
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        speechText = 'The First Block deadline to drop classes is ' + winterDropDate[1];
        displayText = 'The deadline to drop classes is ' + winterDropDate[1];
      }
      else if (SemesterType === 'second Block') {
        //logic for second Block
      speechText = 'The Second Block deadline to drop classes is ' + winterDropDate[2];
      displayText = 'The deadline to drop classes is ' + winterDropDate[2];
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
         speechText = 'For Spring Semester deadline to drop classes is ' + springDropDate[0];
         displayText = 'The deadline to drop classes is ' + springDropDate[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block deadline to drop classes is ' + springDropDate[1];
         displayText = 'The deadline to drop classes is ' + springDropDate[1];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block deadline to drop classes is ' + springDropDate[2];
       displayText = 'The deadline to drop classes is ' + springDropDate[2];
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
         speechText = 'For summer session deadline to drop classes is ' + summerDropDate[0];
         displayText = 'The deadline to drop classes is ' + summerDropDate[0];
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
         speechText = 'For fall Semester deadline to drop classes is ' + fallDropDate[0];
         displayText = 'The deadline to drop classes is ' + fallDropDate[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block deadline to drop classes is ' + fallDropDate[1];
         displayText = 'The deadline to drop classes is ' + fallDropDate[1];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block deadline to drop classes is ' + fallDropDate[2];
       displayText = 'The deadline to drop classes is ' + falldropdate[2];
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
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent'
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;
    let SemesterType = intent.slots.SemesterType.value;

    let winterWithdrawDate = ['March 4', 'Febuary 4', 'March 25'];
    let springWithdrawDate = ['June 17', 'May 22', 'July 2'];
    let summerWithdrawDate = ['August 26'];
    let fallWithdrawDate = ['November 11', 'October 14', 'November 25'];

    if (Semester === 'winter') {
//logic for winter
     if (SemesterType === 'Full Semester') {
        //logic for Full Semester
        speechText = 'For winter Semester deadline to withdraw from classes is ' + winterWithdrawDate[0];
        displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDate[0];
      }
      else if (SemesterType === 'First Block') {
        //logic for First Block
        speechText = 'The First Block deadline to withdraw from classes is ' + winterWithdrawDate[1];
        displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDate[1];
      }
      else if (SemesterType === 'second Block') {
        //logic for second Block
      speechText = 'The Second Block deadline to withdraw from classes is ' + winterWithdrawDate[2];
      displayText = 'The deadline to withdraw from classes is ' + winterWithdrawDate[2];
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
         speechText = 'For Spring Semester deadline to withdraw from classes is ' + springWithdrawDate[0];
         displayText = 'The deadline to withdraw from classes is ' + springWithdrawDate[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block deadline to withdraw from classes is ' + springWithdrawDate[1];
         displayText = 'The deadline to withdraw from classes is ' + springWithdrawDate[1];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block deadline to withdraw from classes is ' + springWithdrawDate[2];
       displayText = 'The deadline to withdraw from classes is ' + springWithdrawDate[2];
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
         speechText = 'For summer session deadline to withdraw from classes is ' + summerWithdrawDate[0];
         displayText = 'The deadline to withdraw from classes is ' + summerWithdrawDate[0];
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
         speechText = 'For fall Semester deadline to withdraw from classes is ' + fallWithdrawDate[0];
         displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDate[0];
       }
       else if (SemesterType === 'First Block') {
         //logic for First Block
         speechText = 'The First Block deadline to withdraw from classes is ' + fallWithdrawDate[1];
         displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDate[1];
       }
       else if (SemesterType === 'second Block') {
         //logic for second Block
       speechText = 'The second Block deadline to withdraw from classes is ' + fallWithdrawDate[2];
       displayText = 'The deadline to withdraw from classes is ' + fallWithdrawDate[2];
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
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent'
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;

    let winterGradDate = ['April 12'];
    let springGradDate = ['July 23'];
    let fallGradDate = ['December 18'];
    if (Semester === 'winter') {
//logic for winter
        speechText = 'Winter graduation is ' + winterGradDate[0];
        displayText = 'Graduation is ' + winterGradDate[0];
    } 
    else if (Semester === 'spring') {
//logic for Spring
         speechText = 'Spring graduation is ' + springGradDate[0];
         displayText = 'Graduation is ' + springGradDate[0];

     }
    else if (Semester === 'summer'){
      //logic for Summer
         speechText = 'Summer session does not have a graduation ceremony.';
         displayText = 'Summer session does not have a graduation ceremony.';
       } 
    else if (Semester === 'fall') {
      //logic for fall
         speechText = 'Fall graduation is ' + fallGradDate[0];
         displayText = 'Graduation is ' + fallGradDate[0];
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
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent'
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;
    let Semester = intent.slots.Semester.value;

    let winterCommDate = ['April 12'];
    let springCommDate = ['July 23'];
    let fallCommDate = ['December 18'];
    if (Semester === 'winter') {
//logic for winter
        speechText = 'Winter commencement is ' + winterCommDate[0];
        displayText = 'Commencement is ' + winterCommpDate[0];
    } 
    else if (Semester === 'spring') {
//logic for Spring
         speechText = 'Spring Commencement is ' + springCommDate[0];
         displayText = 'Commencement is ' + springCommDate[0];
     }
    else if (Semester === 'summer'){
      //logic for Summer
         speechText = 'Summer session does not have a Commencement ceremony.';
         displayText = 'Summer session does not have a Commencement ceremony.';
       } 
    else if (Semester === 'fall') {
      //logic for fall
         speechText = 'Fall Commencement is ' + fallCommDate[0];
         displayText = 'Commencement is ' + fallCommDate[0];
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
        && handlerInput.requestEnvelope.request.intent.name === 'ActivitiesIntent'
  },
  handle(handlerInput) {
    let speechText = 'You can register for classes, depending on your credit count, in your my byui portal under the student tab.';
    let displayText = 'go to my.byui.edu, log in, and access the student tab.';
    let intent = handlerInput.requestEnvelope.request.intent;
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
