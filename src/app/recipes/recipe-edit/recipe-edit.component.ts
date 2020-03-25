import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  recipeForm:FormGroup;
 

  constructor(private activatedRoute:ActivatedRoute,
    private recipeServcie:RecipeService,
    private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( 
      (params:Params) => {
        this.id=params['id'];
        this.editMode = params['id']!=null;
        this.initForm();
      }
    );
  }

  private initForm()
  {
    let recipeName="";
    let recipeImagePath="";
    let recipeDescription="";
    let  recipeIngredients=new FormArray([]);

    if(this.editMode)
    {
      var recipe:Recipe = this.recipeServcie.getRecipe(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe['ingredients'])
      {
        recipe.ingredients.forEach(element => {
          recipeIngredients.push(
            new FormGroup(
              {
                'name':new FormControl(element.name,Validators.required),
                'amount': new FormControl(element.amount,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
              }
            ));
        });
        
      }
    }
    this.recipeForm= new FormGroup(
      {
        'name':new FormControl(recipeName,Validators.required),
        'imagePath':new FormControl(recipeImagePath,Validators.required),
        'description':new FormControl(recipeDescription,Validators.required),
        'ingredients':recipeIngredients
      }
    );
  }
  onSubmit()
  {
    // const recipe:Recipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['desciption'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    //   );
    if(this.editMode){
      console.log(this.recipeForm.value);
      this.recipeServcie.updateRecipe(this.id,this.recipeForm.value); 
    }
    else{
      console.log(this.recipeForm.value);
      this.recipeServcie.addRecipe(this.recipeForm.value);      
    }
    this.clear();
  }
  clear()
  {
    this.router.navigate(['../'],{relativeTo:this.activatedRoute});

  }
  deleteIngredient(ingredientIndex)
  {
    this.recipeServcie.deleteIngredient(this.id,ingredientIndex);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ingredientIndex);
    
  }

  addIngrdients()
  {
   (<FormArray>this.recipeForm.get('ingredients')).push(
     new  FormGroup({
       'name':new FormControl("",Validators.required),
        'amount': new FormControl("",[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
     })
   );
  }
}
