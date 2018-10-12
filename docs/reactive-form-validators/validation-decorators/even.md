---
title: even 
description: Even validation decorator will check whether the value entered is a Even or not. if user tries to enter value which is not a Even the property will be invalid. to use the Even decorator on particular property.
author: rxcontributorone

---

# When to use
Let’s assume that you are creating a user form, which contains fields like Number, Type, EvenNumber and you want the user to enter only even numbers Here depending upon the requirement these scenarios may arise.
1.	Allow only evennumbers in EvenNumber .
2.	Apply Even validation based on matched condition in the form, like if the type  is ‘Even’ then the number value should be even number.
3.	Adding Custom Message on EvenNumber Field.
4.	Apply dynamic validation, If the validation will be changed based on some criteria in the application.

Let’s see how Even validator fulfil the need.

# Basic Even Validation
First we need to create  User class and define a property of even in the model to achieve the functional need of point 1.
[!code-typescript[](\assets\examples\even\add\user.model.ts?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\even\edit\user.model.ts?condition="tab_1=='basicedit'"&type=section)]

Now, we need to create a FormGroup in the component. To achieve this we need to add RxFormBuilder. The RxFormBuilder is an injectable service that is provided with the RxReactiveFormsModule. Inject this dependency by adding it to the component constructor.
Here we have covered Add and Edit form operations. 

[!TabGroup]
# [Add](#tab\basicadd)
[!code-typescript[](\assets\examples\even\add\even-add.component.ts)]
# [Edit](#tab\basicedit)
[!code-typescript[](\assets\examples\even\edit\even-edit.component.ts)]
***

Next, we need to write html code.
[!code-typescript[](\assets\examples\even\add\even-add.component.html?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\even\edit\even-edit.component.html?condition="tab_1=='basicedit'"&type=section)]

[!example(?condition="tab_1=='basicadd'"&type=tab)]
<app-even-add></app-even-add>

[!example(?condition="tab_1=='basicedit'"&type=tab)]
<app-even-edit></app-even-edit>

# BaseConfig
Below options are not mandatory to use in the `@even()` decorator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalexpressions) | Even validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |


## conditionalExpression 
Type :  `Function`  |  `string` 

Even validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionmodel)
[!code-typescript[](\assets\examples\even\conditionalExpression\user.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\examples\even\conditionalExpression\even-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\examples\even\conditionalExpression\even-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=even decorator with conditionalExpression)]
<app-even-conditionalExpression></app-even-conditionalExpression>

## message 
Type :  `string` 

To override the global configuration message and show the custom message on particular control property.

[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\examples\even\message\user.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\examples\even\message\even-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\examples\even\message\even-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=even decorator with custom message)]
<app-even-message></app-even-message>

# Complete even Example
[!TabGroup]
# [Example](#tab\completeexample)
<app-even-complete></app-even-complete>
# [Model](#tab\completemodel)
[!code-typescript[](\assets\examples\even\complete\user.model.ts)]
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\examples\even\complete\even-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\examples\even\complete\even-complete.component.html)]
***