import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
   alunos: Aluno[] = [];

    cadastrar(aluno: Aluno): Aluno {
     var result = null;
     if (this.cpfNaoCadastrado(aluno.cpf) && this.githubNaoCadastrado(aluno.github)) {
       result = new Aluno();
       result.copyFrom(aluno);
       this.alunos.push(result);
     }
     return result;
   }

   apagar(cpf: string): boolean {
     if (this.cpfNaoCadastrado(cpf))
       return false;

     const index = this.alunos.findIndex(a => a.cpf == cpf);
     this.alunos.splice(index, 1);
     return true;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.alunos.find(a => a.cpf == cpf);
   }

    githubNaoCadastrado(github: string): boolean {
       return !this.alunos.find(a => a.github == github);
   }

    atualizar(aluno: Aluno): Aluno {
     var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
     if (result) result.copyFrom(aluno);
     return result;
   }

    getAlunos(): Aluno[] {
     return this.alunos;
   }
}
