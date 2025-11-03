export class Course{
     constructor(
        //i.  קוד מזהה קורס (איתחול במקום ולא ע"י המשתמש)
          public id: number,
          //ii. שם הקורס
          public name: string,
          //iii.  מספר שעות בשבוע בהן נלמד הקורס
          public weekHours: number,
          //iv. רשימה של ימים בשבוע בה נלמד הקורס
            public days: string[],
     ){}
}