<template>
    <v-container>

        <v-form ref="form" v-model="valid" lazy-validation>

            <v-text-field v-model="nome" :counter="10" :rules="rules" label="Nome completo" required></v-text-field>

            <v-text-field v-model="nacionalidade" :counter="10" :rules="rules" label="Nacionalidade" required>
            </v-text-field>

            <v-text-field v-model="datanascimento" :counter="10" :rules="rules" label="Data de nascimento" required>
            </v-text-field>

            <v-text-field v-model="email" :counter="10" :rules="rules" label="E-mail" required></v-text-field>

            <v-text-field v-model="statuscivil" :counter="10" :rules="rules" label="Status Civil" required>
            </v-text-field>

            <v-text-field v-model="telefone" :counter="10" :rules="rules" label="Telefone" required></v-text-field>

            <v-text-field v-model="github" :counter="10" :rules="rules" label="github" required></v-text-field>

            <v-text-field v-model="linkedin" :counter="10" :rules="rules" label="LinkedIn" required></v-text-field>

            <v-text-field v-model="pcd" :counter="10" :rules="rules" label="PCD" required></v-text-field>





            <v-text-field v-model="cep" :counter="10" :rules="rules" label="CEP" required></v-text-field>

            <v-text-field v-model="pais" :counter="10" :rules="rules" label="País" required></v-text-field>

            <v-text-field v-model="estado" :counter="10" :rules="rules" label="Estado" required></v-text-field>

            <v-text-field v-model="cidade" :counter="10" :rules="rules" label="Cidade" required></v-text-field>

            <v-text-field v-model="bairro" :counter="10" :rules="rules" label="Bairro" required></v-text-field>

            <v-text-field v-model="rua" :counter="10" :rules="rules" label="Rua" required></v-text-field>

            <v-text-field v-model="numero" :counter="10" :rules="rules" label="Número" required></v-text-field>

            <v-text-field v-model="complemento" :counter="10" :rules="rules" label="Complemento" required>
            </v-text-field>




            <v-text-field v-model="instituicaofaculdade" :rules="rules" label="Instituição" required></v-text-field>

            <v-text-field v-model="nomecursofaculdade" :rules="rules" label="Nome do curso" required></v-text-field>

            <v-text-field v-model="datainicio" :rules="rules" label="Data de início" required></v-text-field>

            <v-text-field v-model="datatermino" :rules="rules" label="Data de conclusão" required></v-text-field>





            <v-text-field v-model="nomecursocomplementar" :rules="rules" label="Nome do curso" required></v-text-field>

            <v-text-field v-model="instituicaocomplementar" :rules="rules" label="Instituição" required></v-text-field>





            <v-text-field v-model="idioma" :rules="rules" label="Idioma" required></v-text-field>

            <v-text-field v-model="proeficiencia" :rules="rules" label="Proeficiencia" required></v-text-field>




            <v-text-field v-model="adicionais" :rules="rules" label="Adicionais" required></v-text-field>



            <v-checkbox v-model="checkbox" :rules="[(v) => !!v || 'Voce precisa marcar a caixa para continuar!']"
                label="Confirmo que li os termos de contrato do serviço" required></v-checkbox>

            <v-btn color="error" class="mr-4" @click="cancelar"> Cancelar </v-btn>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="registrar">
                Registrar
            </v-btn>

        </v-form>

    </v-container>
</template>

<script>
    export default {
        data: () => ({
            user: {
                nome: "",
                nacionalidade: "",
                datanascimento: "",
                email: "",
                statuscivil: "",
                telefone: "",
                github: "",
                linkedin: "",
                pcd: "",
                cep: "",
                pais: "",
                estado: "",
                cidade: "",
                bairro: "",
                rua: "",
                numero: "",
                complemento: "",
                instituiocaofaculdade: "",
                nomecursofaculdade: "",
                datainicio: "",
                datatermino: "",
                nomecursocomplementar: "",
                instituicaocomplementar: "",
                idioma: "",
                proeficiencia: "",
                adicionais: "",
            },
            valid: false,
            rules: [(v) => !!v || "Campo inválido"],
        }),
        methods: {
            registrar() {
                this.$refs.form.registrar();
            },
            cancelar() {
                this.$refs.form.cancelar();
            },
        },
    };
</script>

<style>
</style>